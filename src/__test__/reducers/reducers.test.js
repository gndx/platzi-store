import reducers from '../../reducers';
import ProductMock from '../../__mocks__/ProductMock';

describe('Reducer', () => {
  test('returns initial state', () => {
    const payload = ProductMock;
    const expected = {
      type: 'ADD_TO_CART',
      payload,
    };
    expect(reducers({}, '')).toEqual({});
  });

  test('returns state with the product added', () => {
    const initialState = {
      cart: [],
    };
    const payload = ProductMock;
    const action = {
      type: 'ADD_TO_CART',
      payload,
    };
    expect(reducers(initialState, action)).toEqual({
      cart: [ProductMock],
    });
  });

  test('returns state with the product removed', () => {
    const initialState = {
      cart: [ProductMock],
    };
    const payload = ProductMock.id;
    const action = {
      type: 'REMOVE_FROM_CART',
      payload: {
        id: payload,
      },
    };
    expect(reducers(initialState, action)).toEqual({
      cart: [],
    });
  });
});
