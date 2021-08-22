import React from "react";
import { Link } from "react-router-dom";
import { formatProductUrl } from "../../utils/utils";
import { useSelector } from "react-redux";
import classes from "./SearchedProducts.module.scss";

const SearchedProducts = (props) => {
  const products = useSelector((state) => state.products.products);
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(props.searchTerm.toLowerCase())
  );

  const handleClearClick = () => {
    props.onClearSearch();
  };

  const searchList = filteredProducts.map((product) => {
    const productUrl = formatProductUrl({
      name: product.title,
      id: product.id,
    });
    return (
      <li key={product.id} className={classes.items} onClick={handleClearClick}>
        <Link to={productUrl}>{product.title}</Link>
      </li>
    );
  });

  return (
    <div className={classes.container}>
      {filteredProducts.length === 0 ? (
        <p>
          No results available for your search term! Try another keyword or
          click the menu icon to browse through our product categories.
        </p>
      ) : (
        <p><strong><em>{`Search result${filteredProducts.length > 1 ? 's' : ''}`}</em></strong></p>
      )}
      <ul>{searchList}</ul>
    </div>
  );
};

export default SearchedProducts;
