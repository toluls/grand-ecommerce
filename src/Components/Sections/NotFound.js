import React from 'react';
import { useSelector } from 'react-redux';
import ProductCard from '../Products/ProductCard';
import SectionDisplay from '../Layout/SectionDisplay';
import classes from './NotFound.module.scss';

const displayImage =  '/img/details.jpg';

const NotFound = () => {
  const products = useSelector(state => state.products.products);

  const productsToDisplay = products.slice(14,19).map(product => <ProductCard key={product.id} id={product.id} name={product.title} image={product.image} price={product.price} />);


  const content = (
    <div className={classes.content}>
      <div id="contact" className={classes.section}>
        <h1>Page Not Found</h1>
        <p>The page you requested is not available. Since you are here... kindly scroll down to look through our products or click on <strong>'Today's Deals'</strong> in the menu to see some great deals!</p>
      </div>
    </div>
  );

  return (
    <SectionDisplay
    contentToDisplay={content}
    displayImage={displayImage}
    bottomHeading={"Some Latest Products"}
    productsToShow={productsToDisplay} />
  );
}

export default NotFound;