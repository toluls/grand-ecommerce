import React, { useState, Fragment } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { backToTop } from '../../utils/utils';
import ProductCard from '../Products/ProductCard';
import SectionDisplay from '../Layout/SectionDisplay';
import CartEmpty from '../Cart/CartEmpty';
import OrderForm from '../UI/OrderForm';
import CustomerOrder from './CustomerOrder';
import classes from './Checkout.module.scss';

const displayImage =  '/img/checkout.jpg';

const CheckoutSection = () => {
  const [order, setOrder] = useState(false);
  const activeCart = useSelector(state => state.cart.cartIsTouched);
  const cartQuantity = useSelector((state) => state.cart.totalQuantity);
  const products = useSelector(state => state.products.products);

  const productsToDisplay = products.slice(5,11).map(product => <ProductCard key={product.id} id={product.id} name={product.title} image={product.image} price={product.price} />);

  const handleFormSubmit = formData => {
    backToTop();
    setOrder({ data: formData });
  }


  const checkoutContent = (
    <div className={classes.content}>
      <h1 className={classes.header}>Checkout</h1>
      { activeCart &&
      <Fragment>
      <div className={classes.order}>
        <div className={classes.items}>
          <p className={classes.heading}>{`You ordered ${cartQuantity} ${cartQuantity === 1 ? 'product' : 'products in total'}`}</p>
          <CustomerOrder />
          <Link to="/cart" className={classes.edit}>Edit Order</Link>
        </div>
        <div className={classes.customer}>
          <p className={classes.heading}>Provide your details to checkout</p>
          <OrderForm onFormSubmit={handleFormSubmit} />
        </div>
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

  const thanksContent = (
    <div className={`${classes.content} ${classes.pad}`}>
      {order && 
      <Fragment>
      <h1 className={classes.header}>Thank you!</h1>
      <div className={classes.thanks}>
        <p>{`Hi ${order.data.name}! Thanks for coming this far.`}</p>
        <p>My name is <strong>Tolu</strong> and I am a creative, passionate front-end developer. You can visit my website at <a href="https://toluls.com" target="_blank" rel="noreferrer">toluls.com</a></p>
        <p>Since this is a demo project I built for my portfolio, I won't be saving or transmitting your data for product and price authentication on a backend server. </p>
        <p>You can view your order below and click on the cart icon to see your cart content.</p>
      </div>
      <h1 className={classes.header}>Customer Details</h1>        
      <div className={classes.finalOrder}>
        <p><strong>Name:</strong> {order.data.name}</p>
        <p><strong>Email:</strong> {order.data.email}</p>
        <p><strong>Phone:</strong> {order.data.number}</p>
        <p><strong>Address:</strong> {order.data.address}</p>
        {order.data.notes && <p><strong>Note:</strong> {order.data.notes}</p>}
      </div>
        <h1 className={classes.header}>Order Details</h1>
        <CustomerOrder />
      </Fragment>}
    </div>
  );


  return (
    <SectionDisplay
    contentToDisplay={!order ? checkoutContent : thanksContent}
    displayImage={displayImage}
    bottomHeading={"Some Latest Products"}
    productsToShow={productsToDisplay} />
  );
}

export default CheckoutSection;