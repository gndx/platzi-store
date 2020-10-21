import getData from '../../utils/getData';

describe('fetch API', () => {
  beforeEach(() => {
    fetch.resetMocks();
  });

  test('returns data after calling an api with fetch', () => {
    fetch.mockResponseOnce(JSON.stringify({ data: '12345' }));

    getData('https://fakeurl.com')
      .then((response) => {
        expect(response.data).toEqual('12345');
      });

    expect(fetch.mock.calls[0][0]).toEqual('https://fakeurl.com');
  });
});
