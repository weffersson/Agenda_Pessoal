import { useContext } from 'react';
import { ContactContext } from '../providers/contactsContext';

const useContactContextHook = () => {
  const contactContext = useContext(ContactContext);

  return contactContext;
};

export default useContactContextHook;
