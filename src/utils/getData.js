export const getData = (api) => {
    return fetch(api)
    .then(response => response.json())
    .then(response => response)
    .catch(error => error)
}