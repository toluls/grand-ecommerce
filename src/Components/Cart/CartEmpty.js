import React from 'react';
import { Link } from 'react-router-dom';
import classes from './CartEmpty.module.scss';

const CartEmpty = () => {
  return (
    <div className={classes.empty}>
      <p>Kindly scroll down to see our latest deals or click the button below to see all available products in our store. Start shopping!</p>
      <Link to="/products" className={classes.shop}>See All Products</Link>
    </div>
  );
}

export default CartEmpty;

