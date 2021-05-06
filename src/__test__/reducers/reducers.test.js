import reducer from '../../reducers';
import ProductMock from '../../__mocks__/ProductMock';

describe('Reducers', () => {
  test('Should return empty state', () => {
    expect(reducer({}, '')).toEqual({});
  });
  test('Should set ADD_TO_CART state', () => {
    const state = {
      cart: [],
    };
    const payload = ProductMock;
    const action = {
      type: 'ADD_TO_CART',
      payload,
    };
    const expected = {
      cart: [
        ProductMock,
      ],
    };
    expect(reducer(state, action)).toEqual(expected);
  });
  test('Should set ADD_TO_CART state', () => {
    const state = {
      cart: [ProductMock],
    };
    const payload = ProductMock;
    const action = {
      type: 'REMOVE_FROM_CART',
      payload,
    };
    const expected = {
      cart: [],
    };
    expect(reducer(state, action)).toEqual(expected);
  });
});
