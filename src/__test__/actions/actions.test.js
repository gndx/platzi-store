import actions from '../../actions'
import ProductMock from '../../__mocks__/ProductMock'

describe('Actions', () => {
    test('Add to cart', () => {
        const payload = ProductMock
        const expected = {
            type: 'ADD_TO_CART',
            payload
        }
        expect(actions.addToCart(ProductMock)).toEqual(expected)
    })

    test('Remove from cart', () => {
        const payload = ProductMock
        const expected = {
            type: 'REMOVE_FROM_CART',
            payload
        }
        expect(actions.removeFromCart(ProductMock)).toEqual(expected)
    })
})