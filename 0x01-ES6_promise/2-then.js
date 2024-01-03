export default function handleResponseFromAPI(promise) {
  const successHandler = () => ({ status: 200, body: 'Success' });

  const errorHandler = () => new Error();
  const finallyHandler = () => console.log('Got a response from the API');

  return promise
    .then(successHandler)
    .catch(errorHandler)
    .finally(() => finallyHandler());
}
