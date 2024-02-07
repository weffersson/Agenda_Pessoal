import { useContext } from 'react';
import { UserContext } from '../providers/userContext';

const useUserContext = () => {
  const userContext = useContext(UserContext);

  return userContext;
};

export default useUserContext;