import { ProfileOrdersUI } from '@ui-pages';
import { FC, useEffect } from 'react';
import { getOrders, getOrdersThunk } from '../../services/slices/orderSlice';
import { AppDispatch, useSelector } from '../../services/store';
import { Preloader } from '@ui';
import { useDispatch } from 'react-redux';

export const ProfileOrders: FC = () => {
  const orders = useSelector(getOrders);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getOrdersThunk());
  }, [dispatch]);

  if (!orders.length) {
    return <Preloader />;
  }

  return <ProfileOrdersUI orders={orders} />;
};
