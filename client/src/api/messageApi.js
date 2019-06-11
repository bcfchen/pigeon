import messages from '../data/messages';

export const addMessage = (userId, messageText) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        userId,
        messageText,
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