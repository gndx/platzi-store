import React from 'react';
import '../styles/components/Products.styl';
import Product from './Product';

const Products = (props) => {
  const { products } = props.state;
  const { addToCart } = props.actions;

  const handleAddToCart = product => () => {
    addToCart(product);
  };
  return (
    <div className="Products">
      <div className="Products-items">
        {products.map(product => (
          <Product key={product.id} product={product} handleAddToCart={handleAddToCart} />
        ))}
      </div>
    </div>
  );
};
export default Products;
