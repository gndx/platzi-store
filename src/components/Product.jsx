import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext'

const Product = ({ product }) => {
  const [cart, setCart] = useContext(CartContext)

  const addToCart = (product) => {
    let newProduct = { ...product }
    newProduct.id = cart.length

    let newCart = [...cart, { ...newProduct }]
    setCart(newCart)
    console.log(newCart)
  };

  return (
    <div className="Products-item">
      <img src={product.image} alt={product.title} />
      <div className="Products-item-info">
        <h2>
          {product.title}
          <span>
            $
          {product.price}
          </span>
        </h2>
        <p>{product.description}</p>
      </div>
      <button type="button" onClick={() => addToCart(product)}>Comprar</button>
    </div>
  )
}

export default Product;