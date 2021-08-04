import React from 'react';
import { Link } from 'react-router-dom';
import classes from './ProductCard.module.scss';

const ProductCard = props => {
  return (
    <Link to={`/products/id/${props.id}`} className={classes.product}>
      <div className={classes.products}>
        <div className={classes.imageContainer}>
        <img src={props.image} alt={props.name} className={classes.image}></img>
        </div>
        <p className={classes.name}>{`${props.name.slice(0,16)} ...`}</p>
        <p className={classes.price}>₦ {props.price}</p>
      </div>
    </Link>
  );
}

export default ProductCard;

