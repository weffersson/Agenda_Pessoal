import { useState, useEffect } from 'react';
import useUserContext from '../../hooks/userContextHooks';
import useContactContextHook from '../../hooks/contactsContextHooks';
import ProfileModalAdaptation from '../../components/ProfileModalAdaptation';
import ContactModalAddition from '../../components/ContactModalInsertion';
import { StyledHeader, StyledMain, StyledDiv } from './style';
import ContactAgenda from '../../components/ContactAgenda';
import { iContact } from '../../providers/contactsContext/types';
import { BsBookmark, BsClipboard } from 'react-icons/bs';
import ContactModalEdit from '../../components/ContactModalAdaptation';
import Button from '../../components/Buttons';

const Dashboard = () => {
  const { user, updatedUser, isOpenModal, toggleModal, logOff } = useUserContext();
  const {
    openContactModal,
    isOpenContactModal,
    openContactEditModal,
    isOpenEditContactModal,
  } = useContactContextHook();

  const [contactId, setContactId] = useState<number>(0);
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const setContact = (contact: iContact) => {
    openContactEditModal();
    setContactId(contact.id);
  };

  const renderContacts = () => {
    if (user.contacts.length === 0) {
      return (
        <div>
          <p>
            Atualmente você não possui nenhum contato. Que tal criar um novo?
          </p>
        </div>
      );
    }

    return user.contacts.map((contact) => (
      <ContactAgenda
        key={contact.id}
        data={contact}
        setContact={setContact}
      ></ContactAgenda>
    ));
  };

  return (
    <>
      <StyledDiv>
        <StyledHeader>
          <div>
            <h1>Agenda Pessoal</h1>
            <div>
              <p>Nome: {updatedUser.name}</p>
              <p>E-Mail: {updatedUser.email}</p>
              <p>Telefone: {updatedUser.phone}</p>
              <p>Data de criação: {updatedUser.createdAt}</p>
              <p>Data e hora atual: {currentDateTime.toLocaleString()}</p>
            </div>
          </div>
          <div>
            <Button
              onClick={toggleModal}
              buttonVariation={'editProfile'}
              type={'button'}
            >
              Edite seu perfil
              <BsClipboard size={35} />
            </Button>
            <Button onClick={logOff} buttonVariation={'logout'} type={'button'}>
              Sair
            </Button>
          </div>
        </StyledHeader>
      </StyledDiv>

      <StyledMain>
        <section>
          <div>
            <Button
              type={'button'}
              onClick={openContactModal}
              buttonVariation={'Sign-in'}
            >
              Crie um novo contato
              <BsBookmark size={35} />
            </Button>
          </div>

          <ul>{renderContacts()}</ul>
        </section>

        {isOpenModal && <ProfileModalAdaptation toggleModal={toggleModal} />}
        {isOpenContactModal && (
          <ContactModalAddition openContactModal={openContactModal} />
        )}
        {isOpenEditContactModal && (
          <ContactModalEdit
            contactId={contactId}
            openContactEditModal={openContactEditModal}
          />
        )}
      </StyledMain>
    </>
  );
};

export default Dashboard;