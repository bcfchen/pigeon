import React from 'react';
import PropTypes from 'prop-types';
import Message from '../../models/core/Message';
import User from '../../models/core/User';

const UserInfoItem = ({ message }) => {
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
  user: PropTypes.instanceOf(User).isRequired,
};

export default UserInfoItem;
