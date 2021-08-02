import axios from 'axios';
import { productsActions } from './products-slice';

export const loadProducts = () => {
  return async (dispatch) => {
    const fetchProducts = async () => {
      const products = await axios.get('https://fakestoreapi.com/products');
      return products.data;
    }
    
    const retrievedProducts = await fetchProducts();
    dispatch(productsActions.loadProducts(retrievedProducts));
  }
}