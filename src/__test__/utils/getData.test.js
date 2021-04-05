import getData from '../../utils/getData';

describe("Test group for fetching apis", () => {
    beforeEach(()=>{
        fetch.resetMocks();
    });
    test("Hit an API and return its response",() => {
        // Mock response
        fetch.mockResponseOnce(JSON.stringify({data:'12345'}));
        getData('https://google.com')
            .then((response) =>{
                // Response should be the one it's mocked
                expect(response.data).toEqual('12345')
            });
            // Should hit google.com
            expect(fetch.mock.calls[0][0]).toEqual('https://google.com')
    });
});