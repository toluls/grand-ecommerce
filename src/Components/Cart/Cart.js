import React, { Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import { cartActions } from "../../Store/cart-slice";
import { uiActions } from '../../Store/ui-slice';
import ProductCard from "../Products/ProductCard";
import SectionDisplay from "../Layout/SectionDisplay";
import CallToAction from "../UI/CallToAction";
import CartItem from "./CartItem";
import { backToTop } from "../../utils/utils";
import classes from "./Cart.module.scss";
import CartEmpty from "./CartEmpty";

const displayImage = "/img/cart.jpg";

const CartSection = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);
  const cartQuantity = useSelector((state) => state.cart.totalQuantity);
  const totalCartAmount = useSelector((state) => state.cart.totalAmount);
  const products = useSelector((state) => state.products.products);
  const activeCart = cartQuantity > 0;

  const cartNotification = message => {
    dispatch(uiActions.postNotification({ title: 'Cart Updated', message }));
  }

  const handleReduceClick = (id) => {
    dispatch(cartActions.removeFromCart({ id }));
    cartNotification('The item quantity has been reduced');
  };

  const handleIncreaseClick = (id, price) => {
    dispatch(cartActions.addToCart({ id, price, currentQuantity: 1 }));
    cartNotification('The item quantity has been increased');
  };

  const handleDeleteClick = (id) => {
    dispatch(cartActions.deleteFromCart({ id }));
    cartNotification('The selected item has been removed from your cart');
  };

  const handleClearCart = () => {
    dispatch(cartActions.clearCart());
    cartNotification('Your cart has been cleared! Kindly visit our products section to shop again.');
    backToTop();
  };

  const productsToDisplay = products
    .slice(0, 5)
    .map((product) => (
      <ProductCard
        key={product.id}
        id={product.id}
        name={product.title}
        image={product.image}
        price={product.price}
      />
    ));

  const displayCartItems = cartItems.map((item) => (
    <CartItem
      key={item.id}
      id={item.id}
      name={item.name}
      image={item.image}
      price={item.price}
      quantity={item.currentQuantity}
      subtotal={item.price * item.currentQuantity}
      onReduceClick={handleReduceClick.bind(null, item.id)}
      onIncreaseClick={handleIncreaseClick.bind(null, item.id, item.price)}
      onDeleteClick={handleDeleteClick.bind(null, item.id)}
    />
  ));

  const content = (
    <div className={classes.container}>
      <h1 className={classes.header}>{activeCart && "My "}Cart</h1>
      <p
        className={classes.notice}
      >{activeCart ? `You have ${cartQuantity} ${cartQuantity === 1 ? 'item' : 'items'} in your cart` : 'The cart is empty'}</p>
      {activeCart && (
        <Fragment>
          <div className={classes.items}>
            {displayCartItems}
            <div className={classes.grandTotal}>
              <button className={classes.clear} onClick={handleClearCart}>
                Clear Cart
              </button>
              <p className={classes.totalPrice}>
                <strong>₦ {totalCartAmount.toFixed(2)}</strong>
              </p>
            </div>
          </div>
          <div className={classes.action}>
            <CallToAction text="Proceed To Checkout" path="checkout" />
          </div>
        </Fragment>
      )}

      {!activeCart && <CartEmpty />}
    </div>
  );

  return (
    <SectionDisplay
      contentToDisplay={content}
      displayImage={displayImage}
      bottomHeading={"Latest Discounted Products"}
      productsToShow={productsToDisplay}
    />
  );
};

export default CartSection;
