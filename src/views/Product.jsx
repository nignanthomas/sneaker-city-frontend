import React from 'react';
import Layout from '../components/Layout';
import ProductComponent from '../components/ProductComponent';

const Product = (props) => {
  document.title = 'Sneaker City - Product Details';

  return (
    <Layout>
      <ProductComponent {...props} />
    </Layout>
  );
};

export default Product;
