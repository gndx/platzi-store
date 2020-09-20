import React, { useContext } from 'react'
import { nanoid } from 'nanoid'

import { ShopContext } from '../context/GlobalState'
import '../styles/components/Checkout.styl'

const Checkout = () => {
  const { cart, removeFromCart } = useContext(ShopContext)

  const handleSumTotal = () => {
    const reducer = (accumulator, currentValue) =>
      accumulator + currentValue.price
    const sum = cart.reduce(reducer, 0)
    return sum
  }

  const remove = product => () => {
    removeFromCart(product)
  }
  return (
    <div className="Checkout">
      <div className="Checkout-content">
        {cart.length > 0 ? <h3>Lista de Pedidos:</h3> : <h2>Sin Pedidos</h2>}
        {cart.map(item => (
          <div className="Checkout-item" key={nanoid()}>
            <div className="Checkout-element">
              <h4>{item.title}</h4>
              <span>{`$${item.price}`}</span>
            </div>
            <button type="button" onClick={remove(item)}>
              <i className="fas fa-trash-alt" />
            </button>
          </div>
        ))}
      </div>
      {cart.length > 0 && (
        <div className="Checkout-sidebar">
          <h3>{`Precio Total: $ ${handleSumTotal()}`}</h3>
        </div>
      )}
    </div>
  )
}

export default Checkout
