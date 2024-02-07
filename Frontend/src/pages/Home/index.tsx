import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { FiEye, FiEyeOff } from 'react-icons/fi';

import Button from '../../components/Buttons';
import Input from '../../components/PropsInput';
import RegistrationModal from '../../components/RegistrationModal';

import { StyledMain, StyledError } from './style';

import wallpaperImage from '../../assets/images/fundo.png';
import { DataLogin, schema } from './schema';

import userContextHook from '../../hooks/userContextHooks';

const Home = () => {
  const { userLogin, toggleModal, isOpenModal } = userContextHook();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<DataLogin>({
    resolver: zodResolver(schema),
  });

  const [showPassword, setShowPassword] = useState(false);
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const onSubmit = (data) => {
    userLogin(data);
  };

  return (
    <StyledMain>
      <section>
        <div>
          <img src={wallpaperImage} alt="Imagem" />
        </div>
      </section>
      <section>
        <div>
          <div>
            Data e hora atual: {currentDateTime.toLocaleString()}
          </div>
          <p>Bem-vindo à sua Agenda Pessoal!</p>
          <h2>Login da conta</h2>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            inputVariation="form"
            id="emailLogin"
            type="email"
            disabled={false}
            label="E-Mail"
            required={true}
            placeholder="Digite seu e-mail"
            register={register('email')}
          />
          {errors.email?.message && (
            <StyledError>{errors.email.message}</StyledError>
          )}

          <div style={{ position: 'relative' }}>
            <Input
              inputVariation="form"
              id="passwordLogin"
              type={showPassword ? 'text' : 'password'}
              disabled={false}
              label="Senha"
              required={true}
              placeholder="Digite sua senha"
              register={register('password')}
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              style={{
                position: 'absolute',
                top: '40%',
                right: '10px',
                transform: 'translateY(-50%)',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
              }}
            >
              {showPassword ? (
                <FiEyeOff size={20} />
              ) : (
                <FiEye size={20} />
              )}
            </button>
          </div>
          {errors.password?.message && (
            <StyledError>{errors.password.message}</StyledError>
          )}

          <Button type="submit" buttonVariation="Sign-in">
            Entrar
          </Button>
        </form>
        <div>
          <p>Não tem uma conta ainda?</p>
          <Button
            type="submit"
            buttonVariation="Join"
            onClick={toggleModal}
          >
            Criar conta
          </Button>
        </div>
      </section>
      {isOpenModal && <RegistrationModal toggleModal={toggleModal} />}
    </StyledMain>
  );
};

export default Home;