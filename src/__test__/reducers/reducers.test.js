import reducer from '../../reducers';
import ProductMock from '../../__mocks__/ProductMock';

describe('Test suite for reducers', () => {
    test('Test initial State', () => {
        expect(reducer({}, '')).toEqual({});
    });
    test('Add product to cart', () => {
        const initailState = {
            cart: [],
        };
        const payload = ProductMock;
        const action = {
            type: 'ADD_TO_CART',
            payload
        };
        const expected = {
            cart: [
                ProductMock
            ]
        };
        expect(reducer(initailState, action)).toEqual(expected);
    });
});