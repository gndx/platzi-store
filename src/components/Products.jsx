import React from 'react';
import { connect } from 'react-redux';
import actions from '../actions';
import '../styles/components/Products.styl';
import Product from './Product';
import products from '../initialState'

const Products = () => {
  console.log(products.products)

  return (
    <div className="Products">
      <div className="Products-items">
        {products.products.map(product => (
          <Product
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </div>
  );
};

export default Products
