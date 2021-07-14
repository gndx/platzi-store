import actions from '../../actions';
import ProductMock from '../../__mocks__/ProductMock';
import { ADD_TO_CART, REMOVE_FROM_CART } from '../../types/actionTypes';

describe('Actions from Redux', () => {
  test('should Add to cart', () => {
    const payload = ProductMock;
    const expected = {
      type: ADD_TO_CART,
      payload,
    };
    expect(actions.addToCart(payload)).toEqual(expected);
  });

  test('should Remove from cart', () => {
    const payload = ProductMock;
    const expected = {
      type: REMOVE_FROM_CART,
      payload,
    };
    expect(actions.removeFromCart(payload)).toEqual(expected);
  });
});
