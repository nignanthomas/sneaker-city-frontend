import React, { useEffect, useState } from 'react';
import { classNames } from '../../helpers/shared';
import { allSizes } from '../../helpers/sizes.api';

const SelectSize = ({ productSizes, selectSize, selectedSize }) => {
  const [sizes, setSizes] = useState([]);
  const [error, setError] = useState(null);
  const [availableSizes, setAvailableSizes] = useState([]);

  const getSizes = async () => {
    await allSizes()
      .then(data => setSizes(data.data))
      .catch(error => setError(error))
  };

  const selectedSizeQty = (selectedSize) => {
    const product = productSizes.find((productSize) => productSize.sizeId === selectedSize.id);
    return product.quantity;
  };

  useEffect(() => {
    getSizes();
    const productSizesId = productSizes.map((productSize) => productSize.sizeId);
    setAvailableSizes(productSizesId);
  }, [productSizes]);

  return (
    <div className="mt-5">
      Select Size
      {selectedSize && (<div>
        {`${selectedSize.number} (${selectedSize.country}): ${selectedSizeQty(selectedSize)} left!`}
      </div>)}
      <div className="mt-2">
        {!!(sizes) && sizes.map((size) => (
          <button
            key={size.id}
            className={classNames(
              (availableSizes.includes(size.id))
                ? 'bg-white hover:bg-gray-50'
                : 'bg-gray-100 cursor-not-allowed',
              'text-gray-800 font-semibold py-2 px-2 mr-2 mb-2 border border-gray-400 rounded shadow',
            )}
            disabled={!(availableSizes.includes(size.id))}
            onClick={() => selectSize(size)}
          >
            {`${size.number} (${size.country})`}
          </button>
        ))}
      </div>
    </div>
  );
}

export default SelectSize;
