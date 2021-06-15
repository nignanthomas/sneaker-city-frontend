import React, { Fragment, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { Elements, CardElement } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { classNames } from '../../helpers/shared';
import { cartLength, clearCart } from '../../helpers/cart';

const stripePromise = loadStripe('pk_test_TYooMQauvdEDq54NiTphI7jx');
const CARD_OPTIONS = {
  iconStyle: 'solid',
  style: {
    base: {
      iconColor: '#c4f0ff',
      color: '#424242',
      border: '2px solid #87bbfd',
      borderRadius: '5px',
      fontWeight: 500,
      fontFamily: 'Roboto, Open Sans, Segoe UI, sans-serif',
      fontSize: '16px',
      fontSmoothing: 'antialiased',
      ':-webkit-autofill': {
        color: '#fce883'
      },
      '::placeholder': {
        color: '#87bbfd'
      }
    },
    invalid: {
      iconColor: '#ed61a3',
      color: '#ed61a3'
    }
  }
};

const PaymentMethod = () => {
  let [isOpen, setIsOpen] = useState(false);

  const closeModal = () => {
    setIsOpen(false);
    clearCart();
    window.location.href = '/';
  };

  const openModal = () => {
    setIsOpen(true);
  };

  return (
    <div className="mt-10 sm:mt-0 mb-5">
      <div className="mt-5 md:mt-0 md:col-span-2">
        <form>
          <div className="shadow overflow-hidden sm:rounded-md">
            <div className="text-lg font-bold px-4 py-3 bg-gray-200 sm:px-6">
              2. Shipping Method
            </div>
            <div className="px-4 py-5 bg-white sm:p-6">
              <div className="border-2 border-indigo-600 sm:rounded-md p-4">
                <Elements stripe={stripePromise}>
                  <CardElement options={CARD_OPTIONS} />
                </Elements>
              </div>
              <button
                type="button"
                className={classNames(!!(cartLength())
                  ? 'bg-indigo-600 hover:bg-indigo-700'
                  : 'bg-indigo-300 cursor-not-allowed',
                  'w-full items-center justify-center px-10 py-3 mt-5 border border-transparent text-base font-medium rounded-md text-white',
                )}
                disabled={!(cartLength())}
                onClick={openModal}
              >
                Place order
              </button>
            </div>
          </div>
        </form>
      </div>

      {/* Success Modal */}
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={closeModal}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-gray-50 shadow-xl rounded-2xl">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-green-900"
                >
                  Payment successful
                </Dialog.Title>
                <div className="mt-2">
                  <p className="text-sm text-gray-500">
                    Thanks for shopping with us. Sit tight and wait for your order!
                  </p>
                </div>

                <div className="mt-4">
                  <button
                    type="button"
                    className="inline-flex justify-center px-4 py-2 text-sm font-medium text-green-900 bg-green-100 border border-transparent rounded-md hover:bg-green-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-green-500"
                    onClick={closeModal}
                  >
                    Got it, thanks!
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
}

export default PaymentMethod;
