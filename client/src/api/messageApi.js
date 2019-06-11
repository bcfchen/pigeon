import messages from '../data/messages';

export const addMessage = (userId, message) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        userId,
        message,
      });
    }, 1000);
  });
}

export const loadMessages = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(messages);
    }, 1000);
  });
}