import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import ProductCard from '../Products/ProductCard';
import SectionDisplay from '../Layout/SectionDisplay';
import classes from './Checkout.module.scss';
import CartEmpty from '../Cart/CartEmpty';

const displayImage =  '/img/checkout.jpg';

const CheckoutSection = () => {
  const activeCart = useSelector(state => state.cart.cartIsTouched);
  const products = useSelector(state => state.products.products);

  const productsToDisplay = products.slice(5,11).map(product => <ProductCard key={product.id} id={product.id} name={product.title} image={product.image} price={product.price} />);

  const orderHandler = () => {
    //
  }


  const content = (
    <div className={classes.content}>
      <h1 className={classes.header}>Checkout</h1>
      { activeCart &&
      <Fragment>
      <div className={classes.order}>
        <div className={classes.customer}>customer</div>
        <div className={classes.items}>items</div>
      </div>
      <div className={classes.action}>
        <button className={classes.placeOrder} onClick={orderHandler}>Place Order</button>
        <Link to="/cart" className={classes.edit}>Edit Order</Link>
      </div>
      </Fragment>
      }
      { !activeCart &&
      <div>
        <p className={classes.notice}>Your cart is currently empty.</p>
        <CartEmpty />
        </div>
      }      
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

export default CheckoutSection;