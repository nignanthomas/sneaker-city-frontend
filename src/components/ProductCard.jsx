import React from 'react';
import { Link } from 'react-router-dom';
import slugify from 'slugify';

const ProductCard = ({ product }) => {
  const productTitle = `${product.brand} ${product.model}`;
  const productSlug = slugify(productTitle, { lower: true })

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-md mx-2 mb-4">
      <Link to={`/products/${product.id}/${productSlug}`}>
        <div className="h-64">
          <img className="object-cover w-full h-full" src={product.picture} alt={product.model} />
        </div>
      </Link>
      <div className="px-6 py-4">
        <Link to={`/products/${product.id}/${productSlug}`}>
          <div className="font-bold text-xl mb-2">
            {productTitle}
          </div>
        </Link>
        <p className="text-gray-700 text-base">
          {`$${product.price}`}
        </p>
        <p className="inline-block bg-gray-200 rounded px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          {product.category.name}
        </p>
      </div>
    </div>
  );
}

export default ProductCard;
