import React from 'react';
import Layout from '../components/Layout/Layout';
import ProductComponent from '../components/Products/ProductComponent';

const Product = (props) => {
  document.title = 'Sneaker City - Product Details';

  return (
    <Layout>
      <ProductComponent {...props} />
    </Layout>
  );
};

export default Product;
