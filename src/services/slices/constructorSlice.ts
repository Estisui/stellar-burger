import { createSlice } from '@reduxjs/toolkit';
import { TConstructorIngredient, TOrder } from '@utils-types';

type TConstructorState = {
  bun?: {
    _id: number;
    price: number;
  };
  ingredients: Array<TConstructorIngredient>;
  orderRequest: boolean;
  orderModalData: TOrder | null;
};

const initialState: TConstructorState = {
  ingredients: [],
  orderRequest: false,
  orderModalData: null
};

const constructorSlice = createSlice({
  name: 'constructorSlice',
  initialState,
  reducers: {},
  selectors: {
    getConstructorItems: (state) => ({
      bun: state.bun,
      ingredients: state.ingredients
    }),
    getOrderRequest: (state) => state.orderRequest,
    getOrderModalData: (state) => state.orderModalData
  }
});

export const { getConstructorItems, getOrderModalData, getOrderRequest } =
  constructorSlice.selectors;
export const constructorReducer = constructorSlice.reducer;
