import React from 'react';
import { useSelector } from 'react-redux';
import ProductCard from '../Products/ProductCard';
import SectionDisplay from '../Layout/SectionDisplay';
import classes from './CustomerService.module.scss';

const displayImage =  '/img/checkout.jpg';

const CustomerServiceSection = () => {
  const products = useSelector(state => state.products.products);

  const productsToDisplay = products.slice(11,16).map(product => <ProductCard key={product.id} id={product.id} name={product.title} image={product.image} price={product.price} />);


  const content = (
    <div className={classes.content}>
      <div id="contact" className={classes.section}>
        <h1>Contact Us</h1>
        <p>You would have been able to contact the store owners here... but this is a demo ecommerce web app project by Tolu!</p>
        <p>Go to <a href="https://toluls.com" target="_blank" rel="noreferrer">toluls.com</a></p>
      </div>
      <div id="privacy" className={classes.section}>
        <h1>Privacy Policy</h1>
        <p></p>
      </div>
      <div id="returns" className={classes.section}>
        <h1>Returns</h1>
        <p></p>
      </div>
      <div id="delivery" className={classes.section}>
        <h1>Delivery</h1>
        <p></p>
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

export default CustomerServiceSection;