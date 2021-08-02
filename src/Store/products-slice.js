import { createSlice } from '@reduxjs/toolkit';

const productsSlice = createSlice({
  name: 'products',
  initialState: { products: [] },
  reducers: {
    loadProducts(state, action) {
      state.products = action.payload;
    }
  }
});

export const productsActions = productsSlice.actions;
export const productsReducer = productsSlice.reducer;