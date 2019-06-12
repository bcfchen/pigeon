import messages from '../data/messages';
import Message from '../models/core/Message';

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
