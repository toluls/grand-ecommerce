import axios from "axios";
import { productsActions } from "./products-slice";
import { uiActions } from "./ui-slice";

export const PRODUCT_API =
  "https://grand-commerce-8fb7a.firebaseio.com/grand-products.json";

export const loadProducts = () => {
  return async (dispatch) => {
    try {
      const fetchProducts = async () => {
        const products = await axios.get(PRODUCT_API);
        const apiProducts = products.data;
        const loadedProducts = [];
        for (let key in apiProducts) {
          const item = apiProducts[key];
          const newItem = {
            id: key,
            title: item.title,
            price: item.price,
            description: item.description,
            category: item.category,
            image: item.image,
          };
          loadedProducts.push(newItem);
        }
        return loadedProducts;
      };
      const retrievedProducts = await fetchProducts();
      dispatch(productsActions.loadProducts(retrievedProducts));
    } catch (err) {
      if (err) {
        dispatch(
          uiActions.postNotification({
            title: "Network Error",
            message: "A network error occurred. Try refreshing the page.",
            time: 30,
          })
        );
      }
    }
  };
};