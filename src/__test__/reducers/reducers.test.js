import reducer from '../../reducers'
import ProductMock from '../../__mocks__/ProductMock'

describe('Reducers', () => {
    test('Return inital state', () => {
        /**
         * Nuestro reducer toma un estado inicial y una acción
         * Lo que queremos probar es que nos retorne el estado inicial
         * Osea sin ejecutar ningun action, por eso la cadena vacía
         * 
         * Esperamos que retorne un objeto vacío porque eso indicamos como initial state
         */
        expect(reducer({}, '')).toEqual({})
    })

    test('ADD_TO_CART', () => {
        const initialState = {
            cart: []
        }
        const payload = ProductMock
        const action = {
            type: 'ADD_TO_CART',
            payload
        }
        const expected = {
            cart:[
                ProductMock
            ]
        }
        expect(reducer(initialState, action)).toEqual(expected)
    })

    test('REMOVE_FROM_CART', () => {
        const initialState = {
            cart: [
                ProductMock
            ]
        }
        const action = {
            type: 'REMOVE_FROM_CART',
            payload: ProductMock
        }
        const expected = {
            cart: []
        }

        expect(reducer(initialState, action)).toEqual(expected)
    })
})