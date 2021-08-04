import React, { Fragment } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import BannerDisplay from '../UI/BannerDisplay';
import LoadingSpinner from '../Products/LoadingSpinner';
import ProductCard from '../Products/ProductCard';
import displayImage from '../../assets/img/adImage_5.jpg';
import classes from './ProductDetails.module.scss';
import bannerImage from '../../assets/img/banner_1.jpg';

const ProductDetails = () => {
  const params = useParams();
  const urlProductId = parseInt(params.productId);
  const isLoading = useSelector(state => state.products.isLoading);
  const storeProducts = useSelector(state => state.products.products);

  const selectedProduct = storeProducts.find(product => product.id === urlProductId); 
  
  const getOtherProducts = () => {
    const otherProducts = storeProducts.filter(product => product.category === selectedProduct.category && product.id !== selectedProduct.id);
    return otherProducts.map(product => <ProductCard key={product.id} id={product.id} image={product.image} name={product.title} price={product.price} />);
  } 

  const alsoViewedProducts = getOtherProducts();
 
  return (
    <div className={classes.product}>
      <div className={classes.top_section}>
        <div className={classes.content}>
        { isLoading ? <LoadingSpinner /> : 
          <Fragment>
          <div className={classes.image}>
            <img src={selectedProduct.image} alt={selectedProduct.title}></img>
          </div>
          <div className={classes.description}>
            <div className={classes.details}>
              <h1 className={classes.title}>{selectedProduct.title}</h1>
              <p className={classes.price}>{`₦ ${selectedProduct.price}`}</p>
            </div>
            <div className={classes.action}>
              <input type="number" step="1" min="1" max="10" className={classes.input} />
              <button className={classes.button}>Add to Cart</button>
            </div>
            <div className={classes.detailed_info}>
              <p className={classes.info_title}>PRODUCT DETAILS</p>
              <p>{selectedProduct.description}</p>
            </div>
          </div>
          </Fragment>
        }
        </div>
        <div className={classes.banner}>
          <img src={bannerImage} alt="Grand display banner"/>
        </div>
      </div>

      <BannerDisplay image={displayImage} />

      <div className={classes.suggestion}>
        <div className={classes.viewed}>
        Customers also viewed
        </div>
        <div className={classes.viewed_products}>
          {alsoViewedProducts}
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;