import React from 'react';
import AllProducts from '../components/Products/AllProducts';
import Layout from '../components/Layout/Layout';

const Shop = () => {
  document.title = 'Sneaker City - Women';

  return (
    <Layout title="Women" description="Shop women's sneakers">
      <AllProducts categoryId={2} />
    </Layout>
  );
};

export default Shop;
