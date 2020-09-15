import React from 'react';
import initialState from './initialState';

export const AppContext = React.createContext({});
export function useAppState() {
  const [state, setState] = React.useState(initialState);

  const addToCart = (payload) => {
    setState({
      ...state,
      cart: [...state.cart, payload],
    });
  };

  const removeFromCart = (payload) => {
    setState({
      ...state,
      cart: state.cart.filter(items => items.id !== payload.id),
    });
  };
  const actions = {
    addToCart,
    removeFromCart,
  };
  return {
    state,
    actions,
  };
}
