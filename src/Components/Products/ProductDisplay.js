import React from 'react';
import { useSelector } from 'react-redux';
import classes from './ProductDisplay.module.scss';

const ProductDisplay = () => {
  const productIsLoading = useSelector(state => state.products.isLoading);
  const products = useSelector(state => state.products.products);

const productsToDisplay = products.map(product => <div key={product.id}>{`Name: ${product.title}`}</div>);

  return (
    <div className={classes.products}>
      {productIsLoading ? 
        <p>Loading products...</p> :
        productsToDisplay
      }
    </div>
  );
}

export default ProductDisplay;