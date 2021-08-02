import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import classes from './HeaderCart.module.scss';
import { CartIcon } from '../UI/Icons';

const HeaderCart = () => {
  const cartQuantity = useSelector(state => state.cart.totalQuantity);

  return (
    <Link to="/cart" className={classes.cart}>
      <div className={classes.cart__icon}>
      <CartIcon />
      </div>
      <div className={classes.cart__text}>{cartQuantity}</div>
    </Link>
  )
}

export default HeaderCart;