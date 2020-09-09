import React, { useContext } from 'react';
import { CartContext } from '../CartContext'

const Product = ({ product }) => {
  const [cart, setCart] = useContext(CartContext)

  const addToCart = () => {
    setCart(currentState => [...currentState, product])
  }

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
      <button type="button" onClick={addToCart}>Comprar</button>
    </div>
  )
}

export default Product;










// import React from 'react';

// const Product = ({ product, handleAddToCart }) => (
//   <div className="Products-item">
//     <img src={product.image} alt={product.title} />
//     <div className="Products-item-info">
//       <h2>
//         {product.title}
//         <span>
//           $
//           {product.price}
//         </span>
//       </h2>
//       <p>{product.description}</p>
//     </div>
//     <button type="button" onClick={handleAddToCart(product)}>Comprar</button>
//   </div>
// );

// export default Product;
