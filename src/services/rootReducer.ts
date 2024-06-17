import { combineReducers } from '@reduxjs/toolkit';
import { ingredientsReducer } from './slices/ingredientsSlice';
import { userReducer } from './slices/userSlice';
import { constructorReducer } from './slices/constructorSlice';
import { orderReducer } from './slices/orderSlice';

const rootReducer = combineReducers({
  ingredientsSlice: ingredientsReducer,
  userSlice: userReducer,
  constructorSlice: constructorReducer,
  orderSlice: orderReducer
});

export default rootReducer;
