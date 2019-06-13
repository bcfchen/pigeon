import React from 'react';
import PropTypes from 'prop-types';
import MessageItem from '../MessageItem/MessageItem';
import Message from '../../models/core/Message';

const ChatWindow = ({ messages }) => {
  const messageItems = messages
    .map(message => (
      <li key={`${message.id}-${message.userId}-${message.createdAt}`}>
        <MessageItem message={message} />
      </li>
    ));
  return (
    <>
      <ul className='uk-list'>
        {messageItems}
      </ul>
    </>
  );
};

ChatWindow.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.shape(Message)).isRequired,
};

export default ChatWindow;
