import { createSlice } from '@reduxjs/toolkit';
import { TUser } from '@utils-types';

const initialState: TUser = {
  email: '',
  name: ''
};

const userSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {},
  selectors: {
    getUser: (state) => state
  }
});

export const { getUser } = userSlice.selectors;
export const userReducer = userSlice.reducer;
