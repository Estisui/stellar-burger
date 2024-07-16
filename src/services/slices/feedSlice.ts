import { getFeedsApi } from '@api';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { TFeedState } from '@utils-types';

export const initialState: TFeedState = {
  orders: [],
  total: 0,
  totalToday: 0
};

export const getFeedsThunk = createAsyncThunk(
  'feeds/get',
  async () => await getFeedsApi()
);

const feedSlice = createSlice({
  name: 'feedSlice',
  initialState,
  reducers: {},
  selectors: {
    getFeedsOrders: (state) => state.orders,
    getFeeds: (state) => state
  },
  extraReducers: (builder) => {
    builder.addCase(getFeedsThunk.fulfilled, (state, action) => {
      const { orders, total, totalToday } = action.payload;
      state.orders = orders;
      state.total = total;
      state.totalToday = totalToday;
    });
  }
});

export const { getFeedsOrders, getFeeds } = feedSlice.selectors;
export const feedReducer = feedSlice.reducer;
