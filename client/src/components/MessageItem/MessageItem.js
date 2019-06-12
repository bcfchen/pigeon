import React from 'react';
import PropTypes from 'prop-types';
import Message from '../../models/core/Message';

const MessageItem = ({ message, isMyMessage }) => {
  const { isPlaceholder, isPending } = message;
  const messageClass = isMyMessage ? 'my-message' : 'others-message';

  return (
    <>
      <div className={messageClass}>
        {isPlaceholder ? 'I am placeholder' : message.messageText}
      </div>
    </>
  );
};

MessageItem.propTypes = {
  message: PropTypes.instanceOf(Message).isRequired,
  isMyMessage: PropTypes.bool,
};

MessageItem.defaultProps = {
  isMyMessage: false,
};

export default MessageItem;
