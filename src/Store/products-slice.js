import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [],
  categories: ['electronics', 'fashion', 'beauty', 'phones', 'computing'],
  isLoading: true
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    loadProducts(state, action) {
      state.products = action.payload;
      state.isLoading = false;
    }
  }
});

export const productsActions = productsSlice.actions;
export const productsReducer = productsSlice.reducer;