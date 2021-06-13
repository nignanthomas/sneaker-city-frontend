import React, { useEffect, useState } from 'react';
import { allProducts } from '../helpers/products.api';
import ProductCard from './ProductCard';

const AllProducts = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  const getAllProducts = async () => {
    await allProducts()
      .then(data => setProducts(data.data))
      .catch(error => setError(error))
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <div className="mt-5 flex flex-wrap -mx-2">
      {!!(products) && products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default AllProducts;
