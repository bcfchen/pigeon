import React from 'react';
import PropTypes from 'prop-types';
import Message from '../../models/core/Message';

const MessageItem = ({ message }) => {
  const { isPending, isMyMessage } = message;
  const myMessage = (
    <div className='my-message uk-align-right'>
      <div className=''>
        {message.messageText}
      </div>
      {isPending && <span uk-icon="icon: clock"></span>}
    </div>
  );

  const othersMessage = (
    <div className='others-message-container'>
      <img
        className="message-icon allow-hover"
        src={message.userImg}
        width={25} height={25}
        alt="" />
      <div className='others-message uk-align-left'>
        <div className=''>
          {message.messageText}
        </div>
      </div>
    </div>
  );

  return (
    <>{isMyMessage ? myMessage : othersMessage}</>
  );
};

MessageItem.propTypes = {
  message: PropTypes.shape(Message).isRequired,
  isMyMessage: PropTypes.bool,
};

MessageItem.defaultProps = {
  isMyMessage: false,
};

export default MessageItem;
