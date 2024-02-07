import React from 'react';
import { Outlet } from 'react-router-dom';
import userContextHook from '../hooks/userContextHooks';

const ProtectedRoutes = () => {
  const { loading } = userContextHook();

  if (loading) {
    return <div>Carregando, por favor espere...</div>;
  }

  return <Outlet />;
};

export default ProtectedRoutes;
