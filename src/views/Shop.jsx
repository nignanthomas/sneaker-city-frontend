import React from 'react';
import AllProducts from '../components/Products/AllProducts';
import Layout from '../components/Layout/Layout';

const Shop = () => {
  document.title = 'Sneaker City - Shop';

  return (
    <Layout title="Shop" description="Shop the trendiest sneakers in town">
      <AllProducts />
    </Layout>
  );
};

export default Shop;
