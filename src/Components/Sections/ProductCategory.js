import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProductDisplay from '../Products/ProductDisplay';
import BannerDisplay from '../UI/BannerDisplay';
import displayAd1 from '../../assets/img/adImage_1.jpg';
import classes from './ProductCategory.module.scss';

const ProductCategory = () => {
  const params = useParams();
  const history = useHistory();
  const urlCategory = params.productCategory;
  const image = `/img/${urlCategory}.jpg`;

  const isLoading = useSelector(state => state.products.isLoading);
  const storeProducts = useSelector(state => state.products.products);
  const products = storeProducts.filter(product => product.category.includes(urlCategory));

  const appCategories = ['electronics', 'fashion', 'beauty', 'phones', 'computing'];
  const isCategory = appCategories.includes(urlCategory)


  if (isCategory) {
    return (
      <div className={classes.category}>
        <BannerDisplay image={image} />
        <ProductDisplay isLoading={isLoading} products={products} adImage={displayAd1} heading={urlCategory.toUpperCase()} />
      </div>
    );
  }
  else {
    history.replace('/products');
    return null;
  }
}

export default ProductCategory;