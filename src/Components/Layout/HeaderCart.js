import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import classes from './HeaderCart.module.scss';
import { CartIcon } from '../UI/Icons';

const HeaderCart = () => {
  const [cartTouched, setCartTouched] = useState(false);
  const cartQuantity = useSelector(state => state.cart.totalQuantity);

  useEffect(() => {
    if (cartQuantity === 0) {
      return;
    }
    setCartTouched(true);

    const timer = setTimeout(() => {
      setCartTouched(false);
    }, 400);

    return () => {
      clearTimeout(timer);
    };

  }, [cartQuantity]);

  return (
      <Link to="/cart" className={`${classes.cart} ${cartTouched && classes.touched}`}>
        <span className={classes.icon}><CartIcon /></span>
        <span className={classes.text}>{cartQuantity}</span>
      </Link>
  )
}

export default HeaderCart;