import React from 'react';
import { useSelector } from 'react-redux';
import classes from './ProductDisplay.module.scss';
import ProductCard from './ProductCard';
import LoadingProducts from './LoadingProducts';


const ProductDisplay = props => {
  const productIsLoading = useSelector(state => state.products.isLoading);
  const products = useSelector(state => state.products.products);

  const productsToDisplay = products.map(product => <ProductCard key={product.id} id={product.id} name={product.title} image={product.image} price={product.price} />);

  const suggestedProducts = productsToDisplay.filter((_product, index) => index % 2 !== 0);

  return (
    <div className={classes.products}>
      <div className={classes.products__latest}>Latest Products</div>
      <div className={classes.products__display}>
      {/* load all products */}
      {
        productIsLoading ?
        <LoadingProducts /> :
        productsToDisplay
        }
      </div>
      <div className={classes.products__advert}>
        <img src={props.adImage} alt="Grand display ad" className={classes.adImage} />
      </div>
      <div className={classes.products__recent}>People Recently Bought</div>
      <div className={classes.products__suggests}>
      {/* load some filtered products */}
      {
        productIsLoading ?
        <LoadingProducts /> :
        suggestedProducts
        }
      </div>
    </div>
  );
}

export default ProductDisplay;