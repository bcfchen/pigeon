import React from 'react';
import PropTypes from 'prop-types';

const MessageInput = ({ newMessageText, onMessageUpdate }) => (
  <>
    {newMessageText}
  </>
);

MessageInput.propTypes = {
  newMessageText: PropTypes.string,
  onMessageUpdate: PropTypes.func.isRequired,
};

MessageInput.defaultProps = {
  newMessageText: undefined,
};

export default MessageInput;
