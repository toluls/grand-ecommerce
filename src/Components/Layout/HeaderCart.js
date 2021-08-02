import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import classes from './HeaderCart.module.scss';
import { CartIcon } from '../UI/Icons';

const HeaderCart = () => {
  const [cartIsTouched, setCartIsTouched] = useState(false);
  const cartQuantity = useSelector(state => state.cart.items.length);

  useEffect(() => {
    if (cartQuantity === 0) {
      return;
    }
    setCartIsTouched(true);

    const timer = setTimeout(() => {
      setCartIsTouched(false);
    }, 400);

    return () => {
      clearTimeout(timer);
    };

  }, [cartQuantity]);

  return (
      <Link to="/cart" className={`${classes.cart} ${cartIsTouched && classes.cart__touched}`}>
        <span className={classes.cart__icon}><CartIcon /></span>
        <span className={classes.cart__text}>{cartQuantity}</span>
      </Link>
  )
}

export default HeaderCart;