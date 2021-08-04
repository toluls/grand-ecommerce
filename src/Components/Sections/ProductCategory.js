import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProductDisplay from '../Products/ProductDisplay';
import BannerDisplay from '../UI/BannerDisplay';
import classes from './ProductCategory.module.scss';

const ProductCategory = () => {
  const params = useParams();
  const history = useHistory();
  const urlCategory = params.productCategory;

  const image = `/img/${urlCategory}1.jpg`;
  const displayImage =  `/img/${urlCategory}2.jpg`;

  const isLoading = useSelector(state => state.products.isLoading);
  const storeProducts = useSelector(state => state.products.products);
  const productCategories = useSelector(state => state.products.categories);
  const products = storeProducts.filter(product => product.category.includes(urlCategory));

  const isCategory = productCategories.includes(urlCategory);


  if (isCategory) {
    return (
      <div className={classes.category}>
        <BannerDisplay image={image} />
        <ProductDisplay isLoading={isLoading} products={products} adImage={displayImage} heading={urlCategory.toUpperCase()} />
      </div>
    );
  }
  else {
    history.replace('/products');
    return null;
  }
}

export default ProductCategory;