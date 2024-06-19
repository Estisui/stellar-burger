import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  orders: []
};

const feedSlice = createSlice({
  name: 'feedSlice',
  initialState,
  reducers: {},
  selectors: {}
});

export const feedReducer = feedSlice.reducer;
