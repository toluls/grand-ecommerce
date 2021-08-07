import axios from 'axios';
import { productsActions } from './products-slice';
import { uiActions } from './ui-slice';

export const loadProducts = () => {
  return async (dispatch) => {
    try {
      const fetchProducts = async () => {
        const products = await axios.get('https://fakestoreapi.com/products');
        return products.data;
      }      
      const retrievedProducts = await fetchProducts();
      dispatch(productsActions.loadProducts(retrievedProducts));
    }
    catch(err) {
      if (err) {
        dispatch(uiActions.postNotification({ title: 'Network Error', message: 'A network error occurred. Try refreshing the page.', time: 20 }));
      }
    }
  }
}

