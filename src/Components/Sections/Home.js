import React from 'react';
import { useSelector } from 'react-redux';
import classes from './Home.module.scss';
import ProductDisplay from '../Products/ProductDisplay';
import NavContent from '../Layout/NavContent';
import TopSlider from '../UI/TopSlider';
import displayAd1 from '../../assets/img/adImage_1.jpg';

const HomeSection = () => {
  const isLoading = useSelector(state => state.products.isLoading);
  const products = useSelector(state => state.products.products);
  
  return (
    <div className={classes.home}>
      <div className={classes.home__header}>
        <nav className={classes.home__nav}>
          <NavContent />
        </nav>
        <div className={classes.home__slider}>
          <TopSlider />
        </div>
      </div>
      
      <div className={classes.home_products}>
        <ProductDisplay isLoading={isLoading} products={products} adImage={displayAd1} />
      </div>
    </div>
  );
}

export default HomeSection;