import React from 'react';
import { MinusSmIcon, PlusSmIcon, TrashIcon } from '@heroicons/react/outline';
import { removeFromCart, updateCart } from '../helpers/cart';

const CartItem = ({ item, checkout }) => {
  return (
    <>
      <div className="max-w-sm w-full lg:max-w-full lg:flex mb-4 border border-gray-200 rounded">
        <div className="h-48 lg:h-auto lg:w-48 flex-none bg-cover text-center overflow-hidden bg-gray-100">
          <img
            className="object-cover w-full h-full max-w-2xl rounded-md shadow-2xl"
            src={item?.product?.picture}
            alt="product" />
        </div>
        <div className="bg-white p-4 flex flex-col justify-between leading-normal w-full">
          <div className="mb-8">
            <div className="text-gray-900 font-bold text-xl mb-2">
              {`${item?.product?.brand} ${item?.product?.model}`}
            </div>
            <p className="bg-gray-200 rounded px-3 py-1 text-sm font-semibold text-gray-700 mb-2">
              {item?.product?.category?.name}
            </p>
          </div>

          {!checkout && (<div className="flex">
            <div className="inline-flex">
              <button
                className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l"
                onClick={() => updateCart(item?.product?.id, item?.quantity - 1)}
              >
                <MinusSmIcon className="h-3 w-3" />
              </button>
              <span className="font-semibold py-2 px-4">{item?.quantity}</span>
              <button
                className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r"
                onClick={() => updateCart(item?.product?.id, item?.quantity + 1)}
              >
                <PlusSmIcon className="h-3 w-3" />
              </button>
            </div>
            <button
              type="button"
              className="ml-12 rounded-full text-red-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              onClick={() => removeFromCart(item?.product?.id)}
            >
              <span className="sr-only">Delete</span>
              <TrashIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>)}
          {checkout && (
            <p className="w-full">
              <span>
                {`Qty: ${item?.quantity}`}
              </span>
              <span className="float-right">
              {`$${item?.product?.price * item?.quantity}`}
              </span>
            </p>
          )}
        </div>
        {!checkout && (<div className="text-gray-700 text-base p-4 w-full text-right">
          {`$${item?.product?.price * item?.quantity}`}
        </div>)}
      </div>
    </>
  );
}

export default CartItem;
