import { getData } from "../../utils/getData";

describe('Fetch Api', () => {
    /**
     * Para poder testear el consumo hacia una api hace falta un mock algo complejo
     * por lo que nos apoyaremos de un modulo npm para lograrlo
     * 
     * A continuación contruiremos la estructura que nos provee dicho modulo para poder usarlo
     */
    beforeEach(() => {
        fetch.resetMocks()
    })

    test('Call api and return data', ()=> {
        /**
         * Definimos la respuesta que mocked fetch retornara
         */
        fetch.mockResponseOnce(JSON.stringify({
            data: '12345'
        }))
        /**
         * Comprobamos que en efecto se este haciendo la solicitud HTTP
         */
        getData('https://google.com')
        .then((response) => {
            expect(response.data).toEqual('12345')
        })
        /**
         * Comprobamos que el endpoint llamado sea el adecuado
         */
        expect(fetch.mock.calls[0][0]).toEqual('https://google.com')
    })
})