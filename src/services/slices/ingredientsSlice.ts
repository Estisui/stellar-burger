import { getIngredientsApi } from '@api';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { TIngredient } from '@utils-types';

type TIngridietsState = {
  ingredients: Array<TIngredient>;
  loading: boolean;
  error: string | null;
};

const initialState: TIngridietsState = {
  ingredients: [],
  loading: false,
  error: null
};

export const getIngredients = createAsyncThunk('ingredients/get', async () =>
  getIngredientsApi()
);

const ingredientsSlice = createSlice({
  name: 'ingredients',
  initialState,
  reducers: {},
  selectors: {
    ingredients: (state) => state.ingredients,
    buns: (state) =>
      state.ingredients.filter((ingredient) => ingredient.type === 'bun'),
    mains: (state) =>
      state.ingredients.filter((ingredient) => ingredient.type === 'main'),
    sauces: (state) =>
      state.ingredients.filter((ingredient) => ingredient.type === 'sauce')
  },
  extraReducers: (builder) => {
    builder
      .addCase(getIngredients.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getIngredients.rejected, (state, action) => {
        state.loading = false;
        if (action.error.message) {
          state.error = action.error.message;
        }
      })
      .addCase(getIngredients.fulfilled, (state, action) => {
        state.loading = false;
        state.ingredients = action.payload;
      });
  }
});

export const { ingredients, buns, mains, sauces } = ingredientsSlice.selectors;
export const ingredientsReducer = ingredientsSlice.reducer;
