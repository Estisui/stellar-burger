import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { TOrder } from '@utils-types';
import { orderBurgerApi } from '@api';

type TOrderState = {
  orderRequest: boolean;
  data: TOrder | null;
};

const initialState: TOrderState = {
  orderRequest: false,
  data: null
};

export const orderBurger = createAsyncThunk(
  'order/orderBurger',
  async (data: string[]) => await orderBurgerApi(data)
);

const orderSlice = createSlice({
  name: 'orderSlice',
  initialState,
  reducers: {
    clearRequestData: (state) => {
      state.orderRequest = false;
      state.data = null;
    }
  },
  selectors: {
    getOrderRequest: (state) => state.orderRequest,
    getOrderModalData: (state) => state.data
  },
  extraReducers: (builder) => {
    builder
      .addCase(orderBurger.pending, (state) => {
        state.orderRequest = true;
      })
      .addCase(orderBurger.rejected, (state) => {
        state.orderRequest = false;
      })
      .addCase(orderBurger.fulfilled, (state, action) => {
        state.orderRequest = false;
        state.data = action.payload.order;
      });
  }
});

export const { getOrderModalData, getOrderRequest } = orderSlice.selectors;
export const { clearRequestData } = orderSlice.actions;
export const orderReducer = orderSlice.reducer;
