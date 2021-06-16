import React from 'react';
import AllProducts from '../components/Products/AllProducts';
import Layout from '../components/Layout/Layout';

const Shop = () => {
  document.title = 'Sneaker City - Men';

  return (
    <Layout title="Men" description="Shop men's sneakers">
      <AllProducts categoryId={1} />
    </Layout>
  );
};

export default Shop;
