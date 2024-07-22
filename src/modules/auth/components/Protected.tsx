import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../hooks';

const Protected = () => {
  const { user } = useAuth();

  if (user === null) {
    return <Navigate to="/login" replace={true} />;
  }

  return (
    <>
      <Navigate to="/dashboard" replace={true} />
      <Outlet />
    </>
  );
};

export default Protected;
