import React from 'react';
import { useParams } from 'react-router-dom';

const ProductCategory = () => {
  const params = useParams();

  return (
    <div>Product category is: {params.productCategory}</div>
  );
}

export default ProductCategory;