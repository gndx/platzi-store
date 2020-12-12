import getData from '../../utils/getData';

describe('fetch API', () => {
  beforeEach(() => {
    fetch.resetMocks();
  });

  test('Test api fetch', () => {
    fetch.mockResponseOnce(JSON.stringify({ data: '12345' }));
    // eslint-disable-next-line arrow-parens
    getData('https://www.google.com').then(response => {
      expect(response.data).toEqual('12345');
    });

    expect(fetch.mock.calls[0][0]).toEqual('https://www.google.com');
  });
});
