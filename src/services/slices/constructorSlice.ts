import { createSlice } from '@reduxjs/toolkit';
import { TUser } from '@utils-types';

const initialState: TUser = {
  email: '',
  name: ''
};

const constructorSlice = createSlice({
  name: 'ingredients',
  initialState,
  reducers: {},
  selectors: {
    user: (state) => state
  }
});
