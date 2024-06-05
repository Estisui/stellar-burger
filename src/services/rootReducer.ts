import { combineReducers } from '@reduxjs/toolkit';
import { ingredientsReducer } from './slices/ingredientsSlice';
import { userReducer } from './slices/userSlice';
import { constructorReducer } from './slices/constructorSlice';

const rootReducer = combineReducers({
  ingredientsSlice: ingredientsReducer,
  userSlice: userReducer,
  constructorSlice: constructorReducer
});

export default rootReducer;
