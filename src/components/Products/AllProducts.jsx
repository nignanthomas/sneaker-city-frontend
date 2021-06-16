import React, { useEffect, useState } from 'react';
import { allProducts, productsByCategory } from '../../helpers/products.api';
import ProductCard from './ProductCard';

const AllProducts = ({ categoryId }) => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  const getAllProducts = async () => {
    await allProducts()
      .then(data => setProducts(data.data))
      .catch(err => setError(err))
  };

  const getProductsByCategory = async (categoryId) => {
    await productsByCategory(categoryId)
      .then(data => setProducts(data.data))
      .catch(err => setError(err))
  };

  useEffect(() => {
    if (categoryId) {
      getProductsByCategory(categoryId);
    } else {
      getAllProducts();
    }
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
