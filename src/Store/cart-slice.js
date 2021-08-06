import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartItems: [],
  totalQuantity: 0,
  totalAmount: 0,
  cartIsTouched: false
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action) {
      const currentCartItem = action.payload;
      const savedCartItem = state.cartItems.find(item => item.id === currentCartItem.id);
      if (!savedCartItem) {
        state.cartItems.push(action.payload);
      }
      else {
        savedCartItem.currentQuantity += currentCartItem.currentQuantity;
      }
      state.totalQuantity += currentCartItem.currentQuantity;
      state.totalAmount += (currentCartItem.currentQuantity * currentCartItem.price);
    },
    removeFromCart(state, action) {
      const currentCartItem = action.payload;
      const savedCartItem = state.cartItems.find(item => item.id === currentCartItem.id);
      state.totalQuantity--;
      state.totalAmount -= savedCartItem.price;
      if (savedCartItem.currentQuantity > 1) {
        savedCartItem.currentQuantity--;
      }
      else {
        state.cartItems = state.cartItems.filter(item => item.id !== currentCartItem.id);
      }
    },
    deleteFromCart(state, action) {
      const currentCartItem = action.payload;
      const savedCartItem = state.cartItems.find(item => item.id === currentCartItem.id);
      const savedQuantity = savedCartItem.currentQuantity;
      const savedTotalAmount = savedCartItem.currentQuantity * savedCartItem.price;

      state.totalQuantity -= savedQuantity;
      state.totalAmount -= savedTotalAmount;
      state.cartItems = state.cartItems.filter(item => item.id !== currentCartItem.id);
    },
    clearCart(state) {
      state.cartItems = [];
      state.totalAmount = 0;
      state.totalQuantity = 0;
    },
    setCartIsTouched(state, action) {
      state.cartIsTouched = action.payload;
    }
  }
});

export const cartActions = cartSlice.actions;
export const cartReducer = cartSlice.reducer;