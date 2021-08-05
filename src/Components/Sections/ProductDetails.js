import React, { Fragment } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { cartActions } from '../../Store/cart-slice';
import LoadingSpinner from '../Products/LoadingSpinner';
import ProductCard from '../Products/ProductCard';
import SectionDisplay from '../Layout/SectionDisplay';
import CallToAction from '../UI/CallToAction';
import classes from './ProductDetails.module.scss';

const displayImage =  '/img/details.jpg';

const ProductDetails = () => {
  const params = useParams();
  const urlProductId = parseInt(params.productId);
  const isLoading = useSelector(state => state.products.isLoading);
  const storeProducts = useSelector(state => state.products.products);
  const cartIsTouched = useSelector(state => state.cart.cartIsTouched);
  const dispatch = useDispatch();

  const selectedProduct = storeProducts.find(product => product.id === urlProductId); 
  
  const getOtherProducts = () => {
    const otherProducts = storeProducts.filter(product => product.category === selectedProduct.category && product.id !== selectedProduct.id);
    return otherProducts.map(product => <ProductCard key={product.id} id={product.id} image={product.image} name={product.title} price={product.price} />);
  };

  const handleAddToCart = () => {
    dispatch(cartActions.addToCart());
    if (!cartIsTouched) {
      dispatch(cartActions.setCartIsTouched(true));
    }
  }

  const displayProducts = getOtherProducts();

  const content = (
    <div className={classes.contentWrapper}>
    <div className={classes.content}>
      { isLoading && <LoadingSpinner />}
      { !isLoading && 
      <Fragment>
      <div className={classes.image}>
        <img src={selectedProduct.image} alt={selectedProduct.title}></img>
      </div>
      <div className={classes.description}>
          <Fragment>
          <h1 className={classes.title}>{selectedProduct.title}</h1>
          <p className={classes.price}>{`₦ ${selectedProduct.price}`}</p>
          </Fragment>
        <div className={classes.action}>
          <div className={classes.inputContainer}>
            <input type="number" step="1" min="1" className={classes.input} />
          </div>
          <button className={classes.button} onClick={handleAddToCart}>Add to Cart</button>
        </div>
        <CallToAction />
        
      </div>
      </Fragment>
      }
    </div>
      <div className={classes.infoContainer}>
        <p className={classes.infoTitle}>PRODUCT DETAILS</p>
        <p className={classes.infoBody}>{selectedProduct.description}</p>
      </div>
      </div>
    );
 
  return (
    <SectionDisplay
    contentToDisplay={content}
    displayImage={displayImage}
    bottomHeading={"Customers also viewed"}
    productsToShow={displayProducts} />
  );
}

export default ProductDetails;