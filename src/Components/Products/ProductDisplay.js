import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { productsActions } from '../../Store/products-slice';
import classes from './ProductDisplay.module.scss';

const ProductDisplay = () => {
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();
  const products = useSelector(state => state.products.products);

  useEffect(() => {
    const getProducts = async () => {
      const products = await axios.get('https://fakestoreapi.com/products');
      dispatch(productsActions.loadProducts(products.data));
      setIsLoading(false);
    }

    getProducts();
  }, [dispatch]);

const productsToDisplay = products.map(product => <div key={product.id}>{`Name: ${product.title}`}</div>);

  return (
    <div className={classes.products}>
      {isLoading ? 
        <p>Loading products...</p> :
        productsToDisplay
      }
    </div>
  );
}

export default ProductDisplay;