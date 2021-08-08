import React from "react";
import { useSelector } from "react-redux";
import classes from "./CustomerOrder.module.scss";

const CustomerOrder = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  // const cartQuantity = useSelector((state) => state.cart.totalQuantity);
  const totalCartAmount = useSelector((state) => state.cart.totalAmount);

  const orderedProducts = cartItems.map(product => {
    return (
      <div key={product.id} className={classes.orderdItem}>
        <div className={classes.imageContainer}>
          <img src={product.image} alt={product.name} className={classes.image} />
        </div>
        <div className={classes.detailsContainer}>
          <div className={classes.name}><strong>{product.name.slice(0, 18)} ...</strong></div>
          <div className={classes.details}>
            <div className={classes.price}>{product.price.toFixed(2)}</div>
            <div className={classes.quantity}><strong>x{product.currentQuantity}</strong></div>
            <div className={classes.subTotal}><strong>{(product.currentQuantity * product.price).toFixed(2)}</strong></div>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className={classes.container}>
      <div className={classes.items}>{orderedProducts}</div>
      <div className={classes.total}>
        <div><strong>Total:</strong></div>
        <div><strong>{totalCartAmount.toFixed(2)}</strong></div>
      </div>
    </div>
  );
};

export default CustomerOrder;
