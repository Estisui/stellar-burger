import { useSelector } from 'react-redux';
import { getUserIsAuthenticated } from '../services/slices/userSlice';
import { Navigate } from 'react-router-dom';

type ProtectedRouteProps = {
  onlyUnAuth?: boolean;
  children: React.ReactElement;
};

export const ProtectedRoute = ({
  children,
  onlyUnAuth
}: ProtectedRouteProps) => {
  const userIsAuthenticated = useSelector(getUserIsAuthenticated);

  if (!onlyUnAuth && !userIsAuthenticated) {
    return <Navigate replace to='/login' />;
  }

  if (onlyUnAuth && userIsAuthenticated) {
    return <Navigate replace to='/' />;
  }

  return children;
};
