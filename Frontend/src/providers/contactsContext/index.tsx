import { AxiosError } from 'axios';
import { iContact } from './types';
import api from '../../services/api';
import React, { createContext, useState } from 'react';
import { toast } from 'react-toastify';
import { UpdateData } from '../../components/ContactModalAdaptation/schema';
import { CreateData } from '../../components/ContactModalInsertion/schema';
import useContextHook from '../../hooks/userContextHooks';

export interface iContactProviderValue {
  contactCreation: (data: CreateData) => void;
  contactUpdating: (data: UpdateData, id: number) => void;
  contactDeletion: (id: number) => void;
  openContactModal: () => void;
  openContactEditModal: () => void;
  isOpenContactModal: boolean;
  isOpenEditContactModal: boolean;
}

export interface icontactsProviderContextProps {
  children: React.ReactNode;
}

export const ContactContext = createContext({} as iContactProviderValue);

export const ContactProvider = ({
  children,
}: icontactsProviderContextProps) => {
  const [isOpenContactModal, setIsOpenContactModal] = useState(false);
  const [isOpenEditContactModal, setIsOpenEditContactModal] = useState(false);
  const { user, setUser } = useContextHook();

  const openContactModal = () => setIsOpenContactModal(!isOpenContactModal);

  const openContactEditModal = () =>
    setIsOpenEditContactModal(!isOpenEditContactModal);

  const contactCreation = async (data: CreateData) => {
    try {
      await api.post<iContact>('/contacts', data);
      const res = await api.get(`/users/${user.id}`);
      localStorage.setItem('@USER', JSON.stringify(res.data));
      setUser(res.data);
      toast.success('Contato criado com sucesso');
      openContactModal();
    } catch (error) {
      const currentError = error as AxiosError<any>;
      toast.error(currentError.response?.data.message);
    }
  };

  const contactUpdating = async (data: UpdateData, id: number) => {
    try {
      await api.patch(`/contacts/${id}`, data);
      const res = await api.get(`/users/${user.id}`);
      localStorage.setItem('@USER', JSON.stringify(res.data));
      setUser(res.data);
      toast.success('Contato atualizado com sucesso');
      openContactEditModal();
    } catch (error) {
      const currentError = error as AxiosError<any>;
      toast.error(currentError.response?.data.message);
    }
  };

  const contactDeletion = async (id: number) => {
    try {
      await api.delete(`/contacts/${id}`);
      const res = await api.get(`/users/${user.id}`);
      localStorage.setItem('@USER', JSON.stringify(res.data));
      setUser(res.data);
      toast.success('Contato excluído com sucesso');
      openContactEditModal();
    } catch (error) {
      const currentError = error as AxiosError<any>;
      toast.error(currentError.response?.data.message);
    }
  };

  return (
    <ContactContext.Provider
      value={{
        contactCreation,
        openContactModal,
        isOpenContactModal,
        openContactEditModal,
        isOpenEditContactModal,
        contactUpdating,
        contactDeletion,
      }}
    >
      {children}
    </ContactContext.Provider>
  );
};
