import React, { Fragment, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { cartActions } from "../../Store/cart-slice";
import { uiActions } from "../../Store/ui-slice";
import LoadingSpinner from "../Products/LoadingSpinner";
import ProductCard from "../Products/ProductCard";
import SectionDisplay from "../Layout/SectionDisplay";
import CallToAction from "../UI/CallToAction";
import ProductNotAvailable from "./ProductNotAvailable";
import classes from "./ProductDetails.module.scss";

const displayImage = "/img/details.jpg";

const ProductDetails = () => {
  const [itemQuantity, setItemQuantity] = useState(1);
  const params = useParams();
  const urlProductId = parseInt(params.productId);
  const isLoading = useSelector((state) => state.products.isLoading);
  const storeProducts = useSelector((state) => state.products.products);
  const cartIsTouched = useSelector((state) => state.cart.cartIsTouched);
  const dispatch = useDispatch();
  const quantityRef = useRef();

  const selectedProduct = storeProducts.find(
    (product) => product.id === urlProductId
  );

  const getProductsToDisplay = () => {
    if (selectedProduct) {
      const otherProducts = storeProducts.filter(
        (product) =>
          product.category === selectedProduct.category &&
          product.id !== selectedProduct.id
      );
      return otherProducts.map((product) => (
        <ProductCard
          key={product.id}
          id={product.id}
          image={product.image}
          name={product.title}
          price={product.price}
        />
      ));
    }
    return storeProducts
      .slice(0, 11)
      .map((product) => (
        <ProductCard
          key={product.id}
          id={product.id}
          image={product.image}
          name={product.title}
          price={product.price}
        />
      ));
  };

  const getContent = () => {
    if (selectedProduct) {
      return (
        <div className={classes.contentWrapper}>
          <div className={classes.content}>
            {isLoading && <LoadingSpinner />}
            {!isLoading && (
              <Fragment>
                <div className={classes.image}>
                  <img
                    src={selectedProduct.image}
                    alt={selectedProduct.title}
                  ></img>
                </div>
                <div className={classes.description}>
                  <Fragment>
                    <h1 className={classes.title}>{selectedProduct.title}</h1>
                    <p className={classes.detailsBelow}>
                      Scroll down for the product details
                    </p>
                    <p
                      className={classes.price}
                    >{`₦ ${selectedProduct.price}`}</p>
                  </Fragment>
                  <div className={classes.action}>
                    <div className={classes.inputContainer}>
                      <input
                        type="number"
                        step="1"
                        min="1"
                        ref={quantityRef}
                        defaultValue="1"
                        onChange={quantityHandler}
                        className={classes.input}
                      />
                    </div>
                    <button
                      className={classes.button}
                      onClick={handleAddToCart}
                    >{`Add ${itemQuantity} To Cart`}</button>
                  </div>
                  <CallToAction text="View Cart" path="cart" />
                </div>
              </Fragment>
            )}
          </div>
          <div className={classes.infoContainer}>
            <p className={classes.infoTitle}>PRODUCT DETAILS</p>
            <p className={classes.infoBody}>
              {!isLoading && selectedProduct.description}
            </p>
          </div>
        </div>
      );
    }
    if (!isLoading && !selectedProduct) {
      return <ProductNotAvailable searchedId={urlProductId} />;
    }
    else {
      return (
        <div className={classes.contentWrapper}>
          <LoadingSpinner />
        </div>
      );
    }
  };

  const quantityHandler = (event) => {
    const value = parseInt(event.target.value);
    if (isNaN(value) || value < 1) {
      setItemQuantity(1);
      return;
    }
    setItemQuantity(value);
  };

  const handleAddToCart = () => {
    const cartItem = {
      id: selectedProduct.id,
      name: selectedProduct.title,
      price: selectedProduct.price,
      image: selectedProduct.image,
      currentQuantity: itemQuantity,
    };

    dispatch(cartActions.addToCart(cartItem));
    setItemQuantity(1);
    quantityRef.current.value = 1;

    const message = `${itemQuantity} new ${
      itemQuantity === 1 ? "item" : "items"
    } added to your cart!`;
    dispatch(
      uiActions.postNotification({
        title: "Cart Updated",
        message,
      })
    );

    if (!cartIsTouched) {
      dispatch(cartActions.setCartIsTouched(true));
    }
  };

  const displayProducts = getProductsToDisplay();

  const content = getContent();

  return (
    <SectionDisplay
      contentToDisplay={content}
      displayImage={displayImage}
      bottomHeading={"Customers also viewed"}
      productsToShow={displayProducts}
    />
  );
};

export default ProductDetails;
