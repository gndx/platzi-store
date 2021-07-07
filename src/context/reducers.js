export const ADD_TO_CART = 'ADD_TO_CART'
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART'

function addProductToCart(product, state) {
  return {
    ...state,
    cart: [...state.cart, product]
  }
}

function shopReducer(state, { type, payload }) {
  switch (type) {
    case ADD_TO_CART:
      return addProductToCart(payload, state)

    case REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter(items => items.cartId !== payload.cartId)
      }
    default:
      return state
  }
}

export default shopReducer
