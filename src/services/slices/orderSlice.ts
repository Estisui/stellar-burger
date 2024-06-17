import { createSlice } from '@reduxjs/toolkit';
import { TConstructorIngredient, TOrder } from '@utils-types';
import type { PayloadAction } from '@reduxjs/toolkit';

type TOrderState = {
  orderRequest: boolean;
  data: TOrder | null;
};

const initialState: TOrderState = {
  orderRequest: false,
  data: null
};

const orderSlice = createSlice({
  name: 'orderSlice',
  initialState,
  reducers: {},
  selectors: {
    getOrderRequest: (state) => state.orderRequest,
    getOrderModalData: (state) => state.data
  }
});

export const { getOrderModalData, getOrderRequest } = orderSlice.selectors;
export const orderReducer = orderSlice.reducer;
