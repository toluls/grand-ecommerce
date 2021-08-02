import React from 'react';
import { useSelector } from 'react-redux';
// import classes from './Products.module.scss';

const ProductSection = props => {
  const products = useSelector(state => state.products.products);
return <div className="grand">Products: {products.length > 0 ? products.length : 'Nothing for now!'}</div>
}

export default ProductSection;