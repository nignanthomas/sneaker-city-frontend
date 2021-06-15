import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getCart, getCartTotal } from '../helpers/cart';
import { classNames, isAuthenticated } from '../helpers/shared';
import CartItem from './CartItem';

const CartComponent = (props) => {
  const [cart, setCart] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    setCart(getCart());
    setCartTotal(getCartTotal());
    window.addEventListener('storage', () => {
      setCart(getCart());
      setCartTotal(getCartTotal());
    })
  }, [])

  return (
    <div className="mt-5 flex flex-wrap mb-2 text-gray-700">
      <div className="w-full md:w-3/5 p-4 text-center">
        <p className="text-2xl tracking-tight mb-5">
          Your Cart
        </p>
        {cart.map((item, index) => (
          <CartItem key={index} item={item} />
        ))}
        {cart.length === 0 && (
          <>
            Your cart is empty!
          <div className="mt-8" />
            <div className="lg:mt-0 lg:flex-shrink-0">
              <div className="inline-flex rounded-md shadow">
                <Link
                  to="/shop"
                  className="inline-flex items-center justify-center px-10 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
                >
                  Shop
              </Link>
              </div>
            </div>
          </>
        )}
      </div>
      <div className="w-full md:w-2/5 bg-gray-50 rounded p-4">
        <div>
          <p className="text-2xl tracking-tight">
            Summary
          </p>
          <p className="text-base font-semibold mt-8">
            <span className="">Total</span>
            <span className="float-right">{`$${cartTotal}`}</span>
          </p>
        </div>

        <button
          type="button"
          className={classNames(cart.length > 0
            ? 'bg-indigo-600 hover:bg-indigo-700'
            : 'bg-indigo-300 cursor-not-allowed',
          'w-full items-center justify-center px-10 py-3 mt-5 border border-transparent text-base font-medium rounded-md text-white',
        )}
          disabled={cart.length === 0}
          onClick={() => props.history.push('/checkout')}
        >
          {`Checkout${!isAuthenticated() ? ' as guest' : ''}`}
        </button>
      </div>
    </div>
  );
}

export default CartComponent;
