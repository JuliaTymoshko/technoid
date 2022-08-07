import { useAuth } from 'utils/hooks/useAuth';
import { Navigate, useLocation } from 'react-router-dom';

export const RequireAuth = ({ children }) => {
  let auth = useAuth();
  let location = useLocation();

  if (!auth.user) {
    return <Navigate to="/profile" state={{ from: location }} replace />;
  }

  return children;
};
