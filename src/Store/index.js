import { createStore } from 'redux';

const initialState = {
  products: [],
  wishlist: [],
  cart: {},
  totalAmount: 0,
  navOpen: false,
}

const storeReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'NAV':
      return { ...state, navOpen: action.value };
    case 'NUM':
      return { ...state, totalAmount: state.totalAmount + 1 };
    default:
      return state;
  }
}

const store = createStore(storeReducer);

export default store;