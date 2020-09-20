import React, { useContext } from 'react'
import { ShopContext } from '../context/GlobalState'
import '../styles/components/Products.styl'
import Product from './Product'

const Products = () => {
  const { products, addToCart } = useContext(ShopContext)

  const handleAddToCart = product => () => {
    addToCart(product) // FIXME: ADD addToCart to Context
  }

  return (
    <div className="Products">
      <div className="Products-items">
        {products.map(product => (
          <Product
            key={product.id}
            product={product}
            handleAddToCart={handleAddToCart}
          />
        ))}
      </div>
    </div>
  )
}

export default Products
