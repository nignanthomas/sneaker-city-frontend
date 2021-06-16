import React from 'react';
import CartComponent from '../components/Cart/CartComponent';
import Layout from '../components/Layout/Layout';

const Cart = (props) => {
  document.title = 'Sneaker City - Cart';

  return (
    <Layout title="Cart" description="Review your cart before you checkout">
      <CartComponent {...props} />
    </Layout>
  );
};

export default Cart;
