import handleResponseFromAPI from "./2-then";

const promise = Promise.resolve();
const ppromise = Promise.reject();
handleResponseFromAPI(promise);
handleResponseFromAPI(ppromise);
