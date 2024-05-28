import { combineReducers } from '@reduxjs/toolkit';
import { ingredientsReducer } from './slices/ingredientsSlice';
import { userReducer } from './slices/userSlice';

const rootReducer = combineReducers({
  ingredients: ingredientsReducer,
  user: userReducer
});

export default rootReducer;
