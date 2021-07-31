import React from 'react';
import classes from './HeaderCart.module.css';
import { CartIcon } from '../UI/Icons';

const HeaderCart = () => {
  return (
      <div className={classes.cart}>
        <div className={classes.cartIcon}>
        <CartIcon />
        </div>
        <div className={classes.cartText}>0</div>
      </div>
  )
}

export default HeaderCart;