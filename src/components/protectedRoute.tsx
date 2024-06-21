import { useSelector } from 'react-redux';
import {
  getUserIsAuthChecked,
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
  const userIsAuthChecked = useSelector(getUserIsAuthChecked);

  if (!onlyUnAuth && !userIsAuthenticated && userIsAuthChecked) {
    return <Navigate replace to='/login' />;
  }

  if (onlyUnAuth && userIsAuthenticated) {
    return <Navigate replace to='/' />;
  }

  if (userIsLoading || !userIsAuthChecked) {
    return <Preloader />;
  }

  return children;
};
