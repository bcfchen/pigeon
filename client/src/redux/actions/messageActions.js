import { addMessage, loadMessages } from '../../api/messageApi';
import * as types from '../constants/action-types';

export const addMessageSuccess = (message) => ({
  type: types.ADD_MESSAGE_SUCCESS,
  message,
});

export const loadMessagesSuccess = (messages) => ({
  type: types.LOAD_MESSAGES_SUCCESS,
  messages,
});

export const addMessageActionCreator = (userId, messageText) => async dispatch => {
  const newMessage = await addMessage(userId, messageText);
  dispatch(addMessageSuccess(newMessage));
  return;
};

export const loadMessagesActionCreator = () => async dispatch => {
  const messages = await loadMessages();
  dispatch(loadMessagesSuccess(messages));
  return;
};