import { ADD_TO_CART, REMOVE_FROM_CART } from '../types/actionTypes';

const addToCart = payload => ({
  type: ADD_TO_CART,
  payload,
});

const removeFromCart = payload => ({
  type: REMOVE_FROM_CART,
  payload,
});

const actions = {
  addToCart,
  removeFromCart,
};

export default actions;
