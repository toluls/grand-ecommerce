import React from 'react';
import { useSelector } from 'react-redux';
import ProductDisplay from '../Products/ProductDisplay';
import BannerDisplay from '../UI/BannerDisplay';
import displayAd4 from '../../assets/img/adImage_4.jpg';
import displayAd3 from '../../assets/img/adImage_3.jpg';
import classes from './Products.module.scss';

const ProductSection = () => {
  const isLoading = useSelector(state => state.products.isLoading);
  const products = useSelector(state => state.products.products);

  return (
    <div className={classes.products}>
      <div className={classes.banner}>
        <BannerDisplay image={displayAd4} />
      </div>
      <ProductDisplay isLoading={isLoading} products={products} adImage={displayAd3} />
    </div>
  );
}

export default ProductSection;