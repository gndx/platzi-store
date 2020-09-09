import React from 'react';
import { initialState, addCart } from '../initialState';
import '../styles/components/Products.styl';
import Product from './Product';

const Products = () => {
  const handleAddToCart = product => () => {
    addCart(product);
  };

  return (
    <div className="Products">
      <div className="Products-items">
        {initialState.products.map(product => (
          <Product
            key={product.id}
            product={product}
            handleAddToCart={handleAddToCart}
          />
        ))}
      </div>
    </div>
  );
};

export default Products;
