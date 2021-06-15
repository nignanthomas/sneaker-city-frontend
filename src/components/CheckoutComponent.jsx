import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getCart, getCartTotal } from '../helpers/cart';
import CartItem from './CartItem';
import DeliveryMethod from './DeliveryMethod';
import PaymentMethod from './PaymentMethod';
import PersonalDetails from './PersonalDetails';

const CheckoutComponent = (props) => {
  const [cart, setCart] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);
  const [personalDetails, setPersonalDetails] = useState({ city: 'Kigali' });
  const [shippingMethod, setshippingMethod] = useState(null);

  const orderTotal = cartTotal + (shippingMethod?.price || 0);

  useEffect(() => {
    setCart(getCart());
    setCartTotal(getCartTotal());
    window.addEventListener('storage', () => {
      setCart(getCart());
      setCartTotal(getCartTotal());
    })
  }, []);

  return (
    <div className="mt-5 flex flex-wrap mb-2 text-gray-700">
      <div className="w-full md:w-3/5 md:px-4">
        <PersonalDetails
          setPersonalDetails={setPersonalDetails}
          personalDetails={personalDetails}
        />
        <DeliveryMethod
          setshippingMethod={setshippingMethod}
          shippingMethod={shippingMethod}
        />
        <PaymentMethod />
      </div>
      <div className="w-full md:w-2/5 bg-gray-50 rounded p-4">
        <div>
          <p className="text-2xl tracking-tight">
            <span className="">Summary</span>
            <Link to="/cart" className="float-right text-sm underline">Edit</Link>
          </p>
          <p className="text-base font-semibold mt-8">
            <span className="">Subtotal</span>
            <span className="float-right">{`$${cartTotal}`}</span>
          </p>
          <p className="text-base font-semibold mt-4">
            <span className="">Sihhping Fees</span>
            <span className="float-right">{`$${shippingMethod?.price || 0}`}</span>
          </p>
          <p className="text-base font-semibold mt-4">
            <span className="">Total</span>
            <span className="float-right">{`$${orderTotal}`}</span>
          </p>
        </div>
        <hr className="w-full bg-indigo-500 rounded-full mt-4 mb-4" />
        {cart.map((item, index) => (
          <CartItem key={index} item={item} checkout />
        ))}
      </div>
    </div>
  );
}

export default CheckoutComponent;
