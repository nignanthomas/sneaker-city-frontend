import React from 'react';
import Hero from '../components/Layout/Hero';
import Layout from '../components/Layout/Layout';
import Trending from '../components/Products/Trending';

const Home = () => {
  document.title = 'Sneaker City';

  return (
    <Layout>
      <Hero />
      <Trending />
    </Layout>
  );
};

export default Home;
