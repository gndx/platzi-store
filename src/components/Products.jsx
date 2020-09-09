import React from 'react';
import '../styles/components/Products.styl';
import Product from './Product';
import products from '../initialState'

const Products = () => (
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


export default Products
