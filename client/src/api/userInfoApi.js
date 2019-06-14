import allUsers from '../data/allUsers';

/*
 * TODO: Improve error handling 
 * We can provide support for both global and component-level error handling by:
 * 1. Passing dispatch into API functions and triggering error handing actions
 * 2. Throwing an exception, which will be propagated to the function where
 *    the call was invoked
 * 
 * Below is an example:
 * 
 * get(path, dispatch) {
 *  dispatch(beginAsyncRequest());
 *  return API.get(this.apiName, path)
 *    .then(response => response.data)
 *    .catch((err) => {
 *      const { message } = err;
 *       dispatch(addErrorMessage(message));
 *       throw (message);
 *     })
 *     .finally(() => dispatch(endAsyncRequest()));
*/

// eslint-disable-next-line
export const loadAllUsers = () => (new Promise((resolve) => {
  setTimeout(() => {
    resolve(allUsers);
  }, 1000);
}));
