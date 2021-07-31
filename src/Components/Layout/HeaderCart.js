import React from 'react';
import { Link } from 'react-router-dom';
import classes from './HeaderCart.module.scss';
import { CartIcon } from '../UI/Icons';

const HeaderCart = () => {
  return (
    <Link to="/cart" className={classes.cart}>
      <div className={classes.cart__icon}>
      <CartIcon />
      </div>
      <div className={classes.cart__text}>0</div>
    </Link>
  )
}

export default HeaderCart;