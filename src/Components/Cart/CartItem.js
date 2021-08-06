import React from 'react';
import { Link } from 'react-router-dom';
import classes from './CartItem.module.scss';

const CartItem = props => {
  return (
    <div className={classes.container}>
      <div className={classes.above}>
        <Link to={`/products/id/${props.id}`} className={classes.imageContainer}>
          <img src={props.image} alt={`${props.name.slice(0, 10)} ...`} className={classes.image} />
        </Link>
        <div className={classes.details}>
          <Link  to={`/products/id/${props.id}`}><p className={classes.name}>{`${props.name.slice(0, 35)} ...`}</p></Link>
          <p className={classes.price}>₦ {props.price}</p>
          <p className={classes.remove} onClick={props.onDeleteClick}>Remove</p>
        </div>
      </div>
      <div className={classes.below}>
        <div className={classes.actionGroup}>
          <div className={classes.action} onClick={props.onReduceClick}>-</div>
          <div className={classes.quantity}>{props.quantity}</div>
          <div className={classes.action} onClick={props.onIncreaseClick}>+</div>
        </div>
        <p className={classes.subtotal}>₦ {props.subtotal.toFixed(2)}</p>
      </div>
    </div>
  );
}

export default CartItem ;