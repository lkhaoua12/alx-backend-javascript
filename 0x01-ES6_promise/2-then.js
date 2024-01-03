export default function handleResponseFromAPI(promise) {
  const successHandler = () => {
    console.log('Got a response from the API');
    return { status: 200, body: 'Success' };
  };

  const errorHandler = () => new Error();

  return promise
    .then(successHandler)
    .catch(errorHandler);
}
