import React, { useEffect, useState } from 'react';
import { latestProducts } from '../../helpers/products.api';
import ProductCard from './ProductCard';

const Trending = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  const getLatestProducts = async () => {
    await latestProducts()
      .then(data => setProducts(data.data))
      .catch(error => setError(error))
  };

  useEffect(() => {
    getLatestProducts();
  }, []);

  return (
    <div className="mt-5 mb-5">
      <p className="text-2xl font-extrabold tracking-tight text-indigo-600">
        Trending Sneakers
      </p>
      <hr className="w-28 h-1 bg-indigo-500 rounded-full mt-1" />
      <div className="mt-5 flex flex-wrap -mx-2">
        {!!(products) && products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
 
export default Trending;
