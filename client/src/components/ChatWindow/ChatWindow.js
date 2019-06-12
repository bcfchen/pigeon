import React from 'react';
import PropTypes from 'prop-types';
import MessageItem from '../MessageItem/MessageItem';
import Message from '../../models/core/Message';

const ChatWindow = ({ myMessages, othersMessages }) => {
  const allMessages = [...myMessages, ...othersMessages];
  const messageItems = allMessages.map(message => <MessageItem message={message} />);
  return (
    <>
      {messageItems}
    </>
  );
};


ChatWindow.propTypes = {
  myMessages: PropTypes.arrayOf(Message).isRequired,
  othersMessages: PropTypes.arrayOf(Message).isRequired,
};

export default ChatWindow;
