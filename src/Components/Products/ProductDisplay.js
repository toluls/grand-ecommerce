import React from 'react';
import classes from './ProductDisplay.module.scss';
import ProductCard from './ProductCard';
import LoadingSpinner from './LoadingSpinner';
import BannerDisplay from '../UI/BannerDisplay';

const ProductDisplay = props => {
  const productIsLoading = props.isLoading;
  const products = props.products;

  const productsToDisplay = products.map(product => <ProductCard key={product.id} id={product.id} name={product.title} image={product.image} price={product.price} />);

  const suggestedProducts = productsToDisplay.filter((_product, index) => index % 2 !== 0);

  return (
    <div className={classes.products}>
      <div className={classes.latest}>{props.heading || 'Latest Products'}</div>
        <div className={classes.display}>
        {/* load all products */}
        {
          productIsLoading ?
          <LoadingSpinner /> :
          productsToDisplay
          }
        </div>
      <div className={classes.advert}>
        <BannerDisplay image={props.adImage} />
      </div>
      <div className={classes.recent}>People Recently Bought</div>
        <div className={classes.suggests}>
        {/* load some filtered products */}
        {
          productIsLoading ?
          <LoadingSpinner /> :
          suggestedProducts
          }
        </div>
    </div>
  );
}

export default ProductDisplay;