import Home from '../pages/Home';
import Dashboard from '../pages/Dashboard';
import ProtectedRoutes from './protectedRoutes';
import { Route, Routes } from 'react-router-dom';


const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route element={<ProtectedRoutes />}>
        <Route path="/dashboard" element={<Dashboard />} />
      </Route>
    </Routes>
  );
};

export default RoutesMain;
