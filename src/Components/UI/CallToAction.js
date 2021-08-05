import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import classes from './CallToAction.module.scss';

const CallToAction = props => {
  const cartIsTouched = useSelector(state => state.cart.cartIsTouched);
  const history = useHistory();

  const continueHandler = () => {
    history.push('/products');
  }

  const pathHandler = () => {
    history.push(`/${props.path}`);
  }

  const display = (
    <div className={classes.path}>
      <div onClick={continueHandler} className={classes.back}>Continue Shopping</div>
      <div onClick={pathHandler} className={classes.checkout}>{props.text}</div>
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