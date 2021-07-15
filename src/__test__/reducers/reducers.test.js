import reducer from '../../reducers';
import ProductMock from '../../__mocks__/ProductMock';
import { ADD_TO_CART, REMOVE_FROM_CART } from '../../types/actionTypes';

describe('Reducers from Redux', () => {
  test('should return initial state', () => {
    // We send a initial state with a null object and we expect another null object from return
    expect(reducer({}, '')).toEqual({});
  });

  test('should ADD_TO_CART', () => {
    const initialState = {
      cart: [],
    };
    const payload = ProductMock;
    const action = {
      type: ADD_TO_CART,
      payload,
    };
    const expected = {
      cart: [ProductMock],
    };
    expect(reducer(initialState, action)).toEqual(expected);
  });
});
