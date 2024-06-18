import { FC, useMemo } from 'react';
import { TConstructorIngredient } from '@utils-types';
import { BurgerConstructorUI } from '@ui';
import { useSelector } from 'react-redux';
import {
  getConstructorItems,
  getIngredientsIds
} from '../../services/slices/constructorSlice';
import { useNavigate } from 'react-router-dom';
import { getUserIsAuthenticated } from '../../services/slices/userSlice';
import {
  clearRequestData,
  getOrderModalData,
  getOrderRequest,
  orderBurger
} from '../../services/slices/orderSlice';
import { useDispatch } from '../../services/store';

export const BurgerConstructor: FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const constructorItems = useSelector(getConstructorItems);
  const orderRequest = useSelector(getOrderRequest);
  const orderModalData = useSelector(getOrderModalData);
  const userIsAuthenticated = useSelector(getUserIsAuthenticated);
  const ingredientsIds = useSelector(getIngredientsIds);

  const onOrderClick = () => {
    if (!constructorItems.bun || orderRequest) return;
    if (!userIsAuthenticated) {
      navigate('/login');
    }
    dispatch(orderBurger(ingredientsIds));
  };
  const closeOrderModal = () => {
    dispatch(clearRequestData());
  };

  const price = useMemo(
    () =>
      (constructorItems.bun ? constructorItems.bun.price * 2 : 0) +
      constructorItems.ingredients.reduce(
        (s: number, v: TConstructorIngredient) => s + v.price,
        0
      ),
    [constructorItems]
  );

  return (
    <BurgerConstructorUI
      price={price}
      orderRequest={orderRequest}
      constructorItems={constructorItems}
      orderModalData={orderModalData}
      onOrderClick={onOrderClick}
      closeOrderModal={closeOrderModal}
    />
  );
};
