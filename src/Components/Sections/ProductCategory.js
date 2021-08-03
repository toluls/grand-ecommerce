import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProductDisplay from '../Products/ProductDisplay';
import BannerDisplay from '../UI/BannerDisplay';
import displayAd1 from '../../assets/img/adImage_1.jpg';
import classes from './ProductCategory.module.scss';

const ProductCategory = () => {
  const params = useParams();
  const category = params.productCategory;
  const image = `/img/${category}.jpg`;

  

  const isLoading = useSelector(state => state.products.isLoading);
  const storeProducts = useSelector(state => state.products.products);

  const products = storeProducts.filter(product => product.category.includes(category)) || [];

  return (
    <div className={classes.category}>
      <BannerDisplay image={image} />
      <ProductDisplay isLoading={isLoading} products={products} adImage={displayAd1} heading={category.toUpperCase()} />
    </div>
  );
}

export default ProductCategory;