import React, { createContext, useReducer } from 'react'
import { nanoid } from 'nanoid'

import shopReducer, { ADD_TO_CART, REMOVE_FROM_CART } from './reducers'
import data from '../initialState'

export const ShopContext = createContext({
  cart: [],
  products: [],
  addToCart: () => {},
  removeFromCart: () => {}
})

export const GlobalState = ({ children }) => {
  const [productState, dispatch] = useReducer(shopReducer, { cart: [] })

  function addToCart(product) {
    dispatch({ type: ADD_TO_CART, payload: { ...product, cartId: nanoid() } })
  }
  function removeFromCart(productId) {
    dispatch({ type: REMOVE_FROM_CART, payload: productId })
  }
  return (
    <ShopContext.Provider
      value={{
        cart: productState.cart,
        products: data.products,
        addToCart,
        removeFromCart
      }}
    >
      {children}
    </ShopContext.Provider>
  )
}
