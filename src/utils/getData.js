export default api => fetch(api)
  .then(response => response.json())
  .then((response => response))
  .catch(error => error);
