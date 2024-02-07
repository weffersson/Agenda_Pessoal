import React from 'react';
import RoutesMain from './routes';
import Global from './styles/global';
import { UserProvider } from './providers/userContext';
import { ContactProvider } from './providers/contactsContext';

function App() {
  return (
    <>
      <Global />
      <UserProvider>
        <ContactProvider>
          <RoutesMain />
        </ContactProvider>
      </UserProvider>
    </>
  );
}

export default App;
