import React from 'react';
import classes from './Home.module.scss';
import ProductDisplay from '../Products/ProductDisplay';
import MainNav from '../Layout/MainNav';
import TopSlider from '../UI/TopSlider';


const HomeSection = props => {
  return (
    <div className={classes.home}>
      <div className={classes.home__header}>
        <nav className={classes.home__nav}>
          <MainNav />
        </nav>
        <div className={classes.home__slider}>
          <TopSlider />
        </div>
      </div>
      
      <div className={classes.home_products}>
        <ProductDisplay />
      </div>
    </div>
  );
}

export default HomeSection;