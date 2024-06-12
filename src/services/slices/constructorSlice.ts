import { createSlice } from '@reduxjs/toolkit';
import { TConstructorIngredient, TOrder } from '@utils-types';
import type { PayloadAction } from '@reduxjs/toolkit';

type TConstructorState = {
  bun?: TConstructorIngredient;
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
  reducers: {
    addIngredient: (state, action: PayloadAction<TConstructorIngredient>) => {
      if (action.payload.type === 'bun') {
        state.bun = action.payload;
      } else {
        state.ingredients.push(action.payload);
      }
    }
  },
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
export const { addIngredient } = constructorSlice.actions;
export const constructorReducer = constructorSlice.reducer;
