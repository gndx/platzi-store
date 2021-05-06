import getData from '../../utils/getData';

describe('Fetch API', () => {
  beforeEach(() => {
    fetch.resetMocks();
  });
  test('Should call api and return data', () => {
    const url = 'https://api.com';
    fetch.mockResponseOnce(JSON.stringify({ data: '12345' }));
    getData(url)
      .then((response) => {
        expect(response.data).toEqual('12345');
      });
    expect(fetch.mock.calls[0][0]).toEqual(url);
  });
  test('Should call api and thrown exception', () => {
    const url = 'https://api.com';
    fetch.mockReject(() => Promise.reject(new Error('an exception occurred!')));
    getData(url)
      .then((response) => {
        expect(response).toContains('an exception occurred!');
      });
    expect(fetch.mock.calls[0][0]).toEqual(url);
  });
});
