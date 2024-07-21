import { Navigate } from 'react-router-dom';
import { useAuth } from '../hooks';

const Protected = () => {
  const { user } = useAuth();

  if (user === null) {
    return <Navigate to="/login" replace={true} />;
  }

  return <Navigate to="/dashboard" />;
};

export default Protected;
