import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: '11111111111',
  totalQuantity: 0
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action) {
      // just testing the redux toolkit implementation, will soon remoove.
      state.items.push('one');
    },
    removeFromCart(state, action) {
      //
    },
    clearCart() {
      //
    }
  }
});

export const cartActions = cartSlice.actions;
export const cartReducer = cartSlice.reducer;