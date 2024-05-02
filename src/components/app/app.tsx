import '../../index.css';
import styles from './app.module.css';
import { Routes, Route } from 'react-router-dom';

import { AppHeader, IngredientDetails, Modal, OrderInfo } from '@components';
import {
  ConstructorPage,
  Feed,
  ForgotPassword,
  Login,
  NotFound404,
  Profile,
  ProfileOrders,
  Register,
  ResetPassword
} from '@pages';
import { ProtectedRoute } from '../protectedRoute';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../services/store';
import { getIngredients } from '../../services/slices/ingredientsSlice';

const App = () => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getIngredients());
  }, [dispatch]);

  return (
    <div className={styles.app}>
      <AppHeader />
      <Routes>
        <Route path='/' element={<ConstructorPage />} />
        <Route path='/feed'>
          <Route index element={<Feed />} />
          <Route
            path=':number'
            element={
              <Modal
                title='Order ID'
                onClose={function (): void {
                  throw new Error('Function not implemented.');
                }}
              >
                <OrderInfo />
              </Modal>
            }
          />
        </Route>
        <Route
          path='/login'
          element={
            <ProtectedRoute>
              <Login />
            </ProtectedRoute>
          }
        />
        <Route
          path='/register'
          element={
            <ProtectedRoute>
              <Register />
            </ProtectedRoute>
          }
        />
        <Route
          path='/forgot-password'
          element={
            <ProtectedRoute>
              <ForgotPassword />
            </ProtectedRoute>
          }
        />
        <Route
          path='/reset-password'
          element={
            <ProtectedRoute>
              <ResetPassword />
            </ProtectedRoute>
          }
        />
        <Route path='/profile'>
          <Route
            index
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />
          <Route path='orders'>
            <Route
              index
              element={
                <ProtectedRoute>
                  <ProfileOrders />
                </ProtectedRoute>
              }
            />
            <Route
              path=':number'
              element={
                <Modal
                  title='Order ID'
                  onClose={function (): void {
                    throw new Error('Function not implemented.');
                  }}
                >
                  <OrderInfo />
                </Modal>
              }
            />
          </Route>
        </Route>
        <Route
          path='/ingredients/:id'
          element={
            <Modal
              title='Детали ингредиента'
              onClose={function (): void {
                throw new Error('Function not implemented.');
              }}
            >
              <IngredientDetails />
            </Modal>
          }
        />
        <Route path='*' element={<NotFound404 />} />
      </Routes>
    </div>
  );
};

export default App;
