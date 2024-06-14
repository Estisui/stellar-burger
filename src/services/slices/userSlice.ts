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
    getUser: (state) => state,
    getUserIsAuthorized: (state) => state.email && state.name
  }
});

export const { getUser, getUserIsAuthorized } = userSlice.selectors;
export const userReducer = userSlice.reducer;
