import React from 'react';
import PropTypes from 'prop-types';
import Message from '../../models/core/Message';

const MessageItem = ({ message, isMyMessage }) => {
  const { isPlaceholder, isPending } = message;
  const messageClass = isMyMessage ? 'my-message' : 'others-message';

  return (
    <>
      <div className='my-message-container uk-align-right'>
        <div className='my-message-inner'>
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
