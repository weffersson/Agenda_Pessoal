import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { RegisterData, schema } from './schema';
import React, { useState } from 'react';
import { Modal } from '../ModalOverall';
import Button from '../Buttons';
import Input from '../PropsInput';
import { StyledError, RegisterModalStyled } from './style';
import { BsX, BsEye, BsEyeSlash } from 'react-icons/bs';
import userContextHook from '../../hooks/userContextHooks';

interface RegistrationModalProps {
  toggleModal: () => void;
}

const RegistrationModal = ({ toggleModal }: RegistrationModalProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterData>({
    resolver: zodResolver(schema),
  });

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const { userRegister } = userContextHook();

  return (
    <Modal toggleModal={toggleModal}>
      <RegisterModalStyled>
        <div>
          <h2>Formulário de Registro</h2>
          <Button
            type={'button'}
            buttonVariation={'closeModal'}
            onClick={toggleModal}
          >
            <BsX size={50} />
          </Button>
        </div>
        <form onSubmit={handleSubmit(userRegister)}>
          <Input
            inputVariation={'form'}
            id={'nameRegister'}
            type={'text'}
            disabled={false}
            label={'Nome'}
            required={true}
            placeholder={'Digite seu nome!'}
            register={register('name')}
          />
          {errors.name?.message && (
            <StyledError>{errors.name.message}</StyledError>
          )}

          <Input
            inputVariation={'form'}
            id={'email'}
            type={'emailRegister'}
            disabled={false}
            label={'E-Mail'}
            required={true}
            placeholder={'digite seu e-mail!'}
            register={register('email')}
          />
          {errors.email?.message && (
            <StyledError>{errors.email.message}</StyledError>
          )}

          <Input
            inputVariation={'form'}
            id={'phoneRegister'}
            type={'phone'}
            disabled={false}
            label={'Telefone'}
            required={true}
            placeholder={'Digite seu número de telefone!'}
            register={register('phone')}
          />
          {errors.phone?.message && (
            <StyledError>{errors.phone.message}</StyledError>
          )}

          <div style={{ position: 'relative' }}>
            <Input
              inputVariation={'form'}
              id={'passwordRegister'}
              type={showPassword ? 'text' : 'password'}
              disabled={false}
              label={'Senha'}
              required={true}
              placeholder={'Digite sua senha!'}
              register={register('password')}
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              style={{
                position: 'absolute',
                top: '25%',
                right: '10px',
                transform: 'translateY(-50%)',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
              }}
            >
              {showPassword ? (
                <BsEyeSlash size={20} />
              ) : (
                <BsEye size={20} />
              )}
            </button>
          </div>
          {errors.password?.message && (
            <StyledError>{errors.password.message}</StyledError>
          )}

          <div style={{ position: 'relative' }}>
            <Input
              inputVariation={'form'}
              id={'confirmPassword'}
              type={showPassword ? 'text' : 'password'}
              disabled={false}
              label={'Confirme sua senha'}
              required={true}
              placeholder={'Confirme sua senha!'}
              register={register('confirmPassword')}
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              style={{
                position: 'absolute',
                top: '25%',
                right: '10px',
                transform: 'translateY(-50%)',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
              }}
            >
              {showPassword ? (
                <BsEyeSlash size={20} />
              ) : (
                <BsEye size={20} />
              )}
            </button>
          </div>
          {errors.confirmPassword?.message && (
            <StyledError>{errors.confirmPassword.message}</StyledError>
          )}

          <Button type={'submit'} buttonVariation={'Sign-in'}>
            Submit
          </Button>
        </form>
      </RegisterModalStyled>
    </Modal>
  );
};

export default RegistrationModal;