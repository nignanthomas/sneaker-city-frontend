import React, { useEffect, useState } from 'react';
import { productById } from '../helpers/products.api';
import { classNames } from '../helpers/shared';
import { addToCart } from '../helpers/cart';
import SelectSize from './SelectSize';

const ProductComponent = (props) => {
  const [product, setProduct] = useState({});
  const [selectedSize, setSelectedSize] = useState(null);
  const [error, setError] = useState(null);

  const getProduct = async (productId) => {
    await productById(productId)
      .then(data => setProduct(data.data))
      .catch(error => setError(error))
  };

  const selectSize = (size) => {
    setSelectedSize(size);
  };

  useEffect(() => {
    const { productId } = props.match.params;
    getProduct(productId);
  }, [props]);

  return (
    <div className="mt-5 flex flex-wrap mb-2">
      <div className="w-full md:w-3/5 md:px-4 text-center text-gray-200">
        <div className="h-96">
          <img
            className="object-cover w-full h-full max-w-2xl rounded-md"
            src={product?.picture}
            alt="product" />
        </div>
      </div>
      <div className="w-full md:w-2/5 bg-gray-50 rounded p-4 text-gray-700">
        <div>
          <p className="text-2xl font-extrabold tracking-tight">
            {`${product?.brand} ${product?.model}`}
          </p>
          <p className="text-base italic">
            {`(Release Date: ${product?.releaseDate})`}
          </p>
          <p className="inline-block bg-gray-200 rounded px-3 py-1 text-sm font-semibold mr-2 mb-2">
            {product?.category?.name}
          </p>
          <p className="text-base font-semibold">
            {`$${product?.price}`}
          </p>
        </div>
        <SelectSize
          productSizes={product?.sizes || []}
          selectSize={selectSize}
          selectedSize={selectedSize}
        />

        <button
          type="button"
          className={classNames(selectedSize
              ? 'bg-indigo-600 hover:bg-indigo-700'
              : 'bg-indigo-300 cursor-not-allowed',
            'w-full items-center justify-center px-10 py-3 mt-5 border border-transparent text-base font-medium rounded-md text-white',
          )}
          disabled={!selectedSize}
          onClick={() => addToCart({product, size: selectedSize})}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductComponent;