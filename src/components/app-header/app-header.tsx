import { FC } from 'react';
import { AppHeaderUI } from '@ui';
import { getUserData } from '../../services/slices/userSlice';
import { useSelector } from 'react-redux';

export const AppHeader: FC = () => (
  <AppHeaderUI userName={useSelector(getUserData).name} />
);
