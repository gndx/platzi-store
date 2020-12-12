// eslint-disable-next-line arrow-parens
const getData = api => {
  return fetch(api)
    .then(response => response.json())
    .then(response => response)
    .catch(err => err);
};

export default getData;
