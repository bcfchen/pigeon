import messages from '../data/messages';

/**
 * In a real-life scenario with live API calls, 
 * we can handle errors by passing dispatch into these methods 
 * and dispatching an error handler action when an exception is met
 * getWithErrorHandling(path, dispatch) {
    return API.get(this.apiName, path)
        .then(response => response.data)
        .catch(err => {
            const { message } = err;
            dispatch(addErrorMessage(message));
            throw (message);
        });
}
 */

export const addMessage = (userId, messageText) => (new Promise((resolve) => {
  setTimeout(() => {
    resolve({
      userId,
      messageText
    });
  }, 1000);
}));

export const loadMessages = () => (new Promise((resolve) => {
  setTimeout(() => {
    resolve(messages);
  }, 1000);
}));
