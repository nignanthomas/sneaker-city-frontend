import React from 'react';
import AllProducts from '../components/AllProducts';
import Layout from '../components/Layout';

const Shop = () => {
  document.title = 'Sneaker City - Shop';

  return (
    <Layout title="Shop" description="Shop the trendiest sneakers in town">
      <AllProducts />
    </Layout>
  );
};

export default Shop;
