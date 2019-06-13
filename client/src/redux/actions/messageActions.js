import { addMessage, loadMessages } from '../../api/messageApi';
import * as types from '../constants/action-types';
import Message from '../../models/core/Message';

export const addMessageSuccess = message => ({
  type: types.ADD_MESSAGE_SUCCESS,
  message,
});

export const addPendingMessage = message => ({
  type: types.ADD_PENDING_MESSAGE,
  message,
});

export const loadMessagesSuccess = messages => ({
  type: types.LOAD_MESSAGES_SUCCESS,
  messages,
});

export const addMessageActionCreator = (userId, messageText) => async (dispatch) => {
  dispatch(addPendingMessage(new Message({ userId, messageText, isPending: true, isMyMessage: true })));
  await addMessage(userId, messageText);
  dispatch(addMessageSuccess());
};

export const loadMessagesActionCreator = (userId) => async (dispatch) => {
  const messageObjs = await loadMessages();
  const messages = messageObjs.map(messageObj => (
    new Message({
      ...messageObj,
      isMyMessage: messageObj.userId === userId
    })
  ));
  dispatch(loadMessagesSuccess(messages));
};
