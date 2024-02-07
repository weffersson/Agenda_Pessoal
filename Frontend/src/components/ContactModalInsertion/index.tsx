import { useForm } from 'react-hook-form';
import { Modal } from '../ModalOverall';
import { zodResolver } from '@hookform/resolvers/zod';
import useContactContextHook from '../../hooks/contactsContextHooks';
import { CreateData, schema } from './schema';
import { ContactCreationStyled, ContactCreationError } from './style';
import Button from '../Buttons';
import Input from '../PropsInput';
import { BsX } from 'react-icons/bs';

interface ContactModalInsertionProps {
  openContactModal: () => void;
}

const ContactModalAddition = ({
  openContactModal,
}: ContactModalInsertionProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateData>({
    resolver: zodResolver(schema),
  });

  const { contactCreation } = useContactContextHook();

  return (
    <Modal toggleModal={openContactModal}>
      <ContactCreationStyled>
        <div>
          <h2>Criar novo contato</h2>
          <Button
            type={'button'}
            buttonVariation={'closeModal'}
            onClick={openContactModal}
          >
            <BsX size={50} />
          </Button>
        </div>
        <form onSubmit={handleSubmit(contactCreation)}>
          <Input
            inputVariation={'form'}
            id={'nameEditProfile'}
            type={'text'}
            disabled={false}
            label={'Nome'}
            required={true}
            placeholder={'Digite o nome'}
            register={register('name')}
          />
          {errors.name?.message && (
            <ContactCreationError>{errors.name.message}</ContactCreationError>
          )}

          <Input
            inputVariation={'form'}
            id={'emailEditProfile'}
            type={'email'}
            disabled={false}
            label={'E-Mail'}
            required={true}
            placeholder={'Digite o e-mail'}
            register={register('email')}
          />
          {errors.email?.message && (
            <ContactCreationError>{errors.email.message}</ContactCreationError>
          )}

          <Input
            inputVariation={'form'}
            id={'phoneEditProfile'}
            type={'phone'}
            disabled={false}
            label={'Telefone'}
            required={true}
            placeholder={'Digite o telefone'}
            register={register('phone')}
          />
          {errors.phone?.message && (
            <ContactCreationError>{errors.phone.message}</ContactCreationError>
          )}

          <Button type={'submit'} buttonVariation={'addContact'}>
            Criar novo contato
          </Button>
        </form>
      </ContactCreationStyled>
    </Modal>
  );
};

export default ContactModalAddition;
