import React from "react";
import classes from "./ProductNotAvailable.module.scss";

const ProductNotAvailable = props => {
  return (
    <div className={classes.content}>
      <p>Hi there! {`We don't have a product with id ${props.searchedId} available. Maybe try searching by name or category?`}</p>
      <p>
        You may also scroll down to see some products you may like or visit our
        products section to check all available products.
      </p>
    </div>
  );
};

export default ProductNotAvailable;
