import React from 'react';
import CheckoutComponent from '../components/Checkout/CheckoutComponent';
import Layout from '../components/Layout';

const Checkout = () => {
  document.title = 'Sneaker City - Checkout';

  return (
    <Layout title="Checkout" description="Provide the delivery details">
      <CheckoutComponent />
    </Layout>
  );
};

export default Checkout;
