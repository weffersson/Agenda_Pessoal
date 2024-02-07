import api from '../../services/api';
import { iUser, iUserReturn, iUserUpdatedReturn } from './types';
import { AxiosError } from 'axios';
import React, {
  createContext,
  useEffect,
  useState,
  SetStateAction,
} from 'react';
import { DataLogin } from '../../pages/Home/schema';
import { toast } from 'react-toastify';
import { RegisterData } from '../../components/RegistrationModal/schema';
import { UpdateData } from '../../components/ProfileModalAdaptation/schema';
import { useNavigate } from 'react-router-dom';

export interface iUserProviderValue {
  userRegister: (data: RegisterData) => void;
  userLogin: (data: DataLogin) => void;
  userUpdate: (data: UpdateData) => void;
  userDeletion: () => void;
  toggleModal: () => void;
  logOff: () => void;
  isOpenModal: boolean;
  loading: boolean;
  user: iUserReturn;
  updatedUser: iUserUpdatedReturn;
  setUser: React.Dispatch<SetStateAction<iUserReturn>>;
}

export interface iUserProviderProps {
  children: React.ReactNode;
}

export const UserContext = createContext({} as iUserProviderValue);

export const UserProvider = ({ children }: iUserProviderProps) => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<iUserReturn>({
    id: 0,
    name: '',
    email: '',
    phone: '',
    contacts: [],
    createdAt: '',
    updatedAt: '',
  });
  const [updatedUser, setUpdatedUser] = useState<iUserUpdatedReturn>(user);

  const toggleModal = () => setIsOpenModal(!isOpenModal);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('@TOKEN');
    const userString = localStorage.getItem('@USER');
    const user: iUser = userString ? JSON.parse(userString) : null;

    if (!token) {
      setLoading(false);
      localStorage.removeItem('@USER');
      navigate('/');
    }

    if (user) {
      setUser(user);
      navigate('/Dashboard');
    } else {
      setLoading(false);
      localStorage.removeItem('@TOKEN');
      navigate('/');
    }

    api.defaults.headers.common.authorization = `Bearer ${token}`;
    setLoading(false);
  }, []);

  const userRegister = async (data: RegisterData) => {
    try {
      await api.post<iUser>('/users', data);
      toast.success('Conta criada com sucesso');
      toggleModal();
    } catch (error) {
      const currentError = error as AxiosError<any>;
      toast.error(currentError.response?.data.message);
    }
  };

  const userLogin = async (data: DataLogin) => {
    try {
      const res = await api.post('/login', data);
      const { token } = res.data;
      api.defaults.headers.common.authorization = `Bearer ${token}`;

      const getUsersRes = await api.get('/users');
      const loggedUser = getUsersRes.data.filter(
        (elt: iUser) => elt.email === data.email
      )[0];

      localStorage.setItem('@TOKEN', token);
      localStorage.setItem('@USER', JSON.stringify(loggedUser));
      setUser(loggedUser);
      setUpdatedUser(loggedUser);

      toast.success('Login bem-sucedido');
      navigate('/Dashboard');
    } catch (error) {
      const currentError = error as AxiosError<any>;
      toast.error(currentError.response?.data.message);
    }
  };

  const userUpdate = async (data: UpdateData) => {
    try {
      if (data.password?.length !== 0) {
        const res = await api.patch(`/users/${user.id}`, data);
        localStorage.setItem('@USER', JSON.stringify(res.data));
        setUpdatedUser(res.data);
      } else {
        const newData = {
          name: data.name,
          phone: data.phone,
          email: data.email,
        };
        const res = await api.patch(`/users/${user.id}`, newData);
        localStorage.setItem('@USER', JSON.stringify(res.data));
        setUpdatedUser(res.data);
      }
      toast.success('Perfil atualizado com sucesso');
      toggleModal();
    } catch (error) {
      const currentError = error as AxiosError<any>;
      toast.error(currentError.response?.data.message);
    }
  };

  const userDeletion = async () => {
    try {
      await api.delete(`/users/${user.id}`);
      toast.warning('Perfil excluído com sucesso');
      toggleModal();
      logOff();
    } catch (error) {
      const currentError = error as AxiosError<any>;
      toast.error(currentError.response?.data.message);
    }
  };

  const logOff = () => {
    localStorage.removeItem('@USER');
    localStorage.removeItem('@TOKEN');
    navigate('/');
  };

  return (
    <UserContext.Provider
      value={{
        userRegister,
        userLogin,
        toggleModal,
        isOpenModal,
        loading,
        user,
        updatedUser,
        userUpdate,
        userDeletion,
        logOff,
        setUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
