import { useSelector } from 'react-redux';
import {
  getUserIsAuthenticated,
  getUserIsLoading
} from '../services/slices/userSlice';
import { Navigate } from 'react-router-dom';
import { Preloader } from './ui/preloader';

type ProtectedRouteProps = {
  onlyUnAuth?: boolean;
  children: React.ReactElement;
};

export const ProtectedRoute = ({
  children,
  onlyUnAuth
}: ProtectedRouteProps) => {
  const userIsAuthenticated = useSelector(getUserIsAuthenticated);
  const userIsLoading = useSelector(getUserIsLoading);

  if (!onlyUnAuth && !userIsAuthenticated) {
    return <Navigate replace to='/login' />;
  }

  if (onlyUnAuth && userIsAuthenticated) {
    return <Navigate replace to='/' />;
  }

  if (userIsLoading) {
    return <Preloader />;
  }

  return children;
};
