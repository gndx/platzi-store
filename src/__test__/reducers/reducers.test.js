import reducer from '../../reducers';
import ProductMock from '../../__mocks__/ProductMock';

describe('Reducers', () => {
  test('Reducer initialstate', () => {
    expect(reducer({}, '')).toEqual({});
  });

  test('Add to cart', () => {
    const initialstate = {
      cart: [],
    };
    const payload = ProductMock;
    const action = {
      type: 'ADD_TO_CART',
      payload,
    };
    const expected = {
      cart: [ProductMock],
    };
    expect(reducer(initialstate, action)).toEqual(expected);
  });
  test('remove to cart', () => {
    const initialstate = {
      cart: [],
    };
    const payload = ProductMock;
    const action = {
      type: 'REMOVE_TO_CART',
      payload,
    };
    const expected = {
      cart: [],
    };
    expect(reducer(initialstate, action)).toEqual(expected);
  });
});
