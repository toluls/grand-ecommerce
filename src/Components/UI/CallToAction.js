import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import classes from './CallToAction.module.scss';

const CallToAction = () => {
  const cartIsTouched = useSelector(state => state.cart.cartIsTouched);
  const history = useHistory();

  const continueHandler = () => {
    history.push('/products');
  }

  const checkoutHandler = () => {
    history.push('/checkout');
  }

  const display = (
    <div className={classes.action}>
      <div onClick={continueHandler} className={classes.back}>Continue Shopping</div>
      <div onClick={checkoutHandler} className={classes.checkout}>Proceed To Checkout</div>
    </div>
  );

  if (cartIsTouched) {
    return display;
  }
  else {
    return null;
  }
}

export default CallToAction;