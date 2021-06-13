import React from 'react';
import Hero from '../components/Hero';
import Layout from '../components/Layout';
import Trending from '../components/Trending';

const Home = () => {
  return (
    <Layout>
      <Hero />
      <Trending />
    </Layout>
  );
};

export default Home;
