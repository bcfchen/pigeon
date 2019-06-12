import React from 'react';
import PropTypes from 'prop-types';
import MessageItem from '../MessageItem/MessageItem';
import Message from '../../models/core/Message';

const ChatWindow = ({ messages }) => {
  const messageItems = messages
    .map(message => <div key={`${message.userId}-${message.messageText}`}><MessageItem message={message} /></div>);
  return (
    <>
      <div>
        {messageItems}
      </div>
    </>
  );
};

ChatWindow.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.shape(Message)).isRequired,
};

export default ChatWindow;
