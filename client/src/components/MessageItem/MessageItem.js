import React from 'react';
import PropTypes from 'prop-types';
import Message from '../../models/core/Message';

const MessageItem = ({ message }) => {
  const { isPlaceholder, isPending, isMyMessage } = message;
  const messageClass = isMyMessage ? 'my-message uk-align-right'
    : 'others-message uk-align-left';

  return (
    <>
      <div className={messageClass}>
        <div>
          {isPlaceholder ? 'I am placeholder' : message.messageText}
        </div>
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
