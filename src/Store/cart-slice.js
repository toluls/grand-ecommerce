import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  totalQuantity: 0,
  cartIsTouched: false
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
    },
    setCartIsTouched(state, action) {
      state.cartIsTouched = action.payload;
    }
  }
});

export const cartActions = cartSlice.actions;
export const cartReducer = cartSlice.reducer;