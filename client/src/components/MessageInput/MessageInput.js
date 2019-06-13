import React from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';

const MessageInput = ({ newMessageText, onMessageUpdate, onAddMessage, t }) => {
  const handleAddMessage = (e) => {
    e.preventDefault();
    onAddMessage();
  };

  return (
    <form onSubmit={handleAddMessage}>
      <div className='uk-inline uk-width-1-1'>
        <button type='submit' className='uk-form-icon uk-form-icon-flip' uk-icon='icon: commenting' />
        <input
          className='uk-input'
          placeholder={t('enterMessage')}
          onChange={e => onMessageUpdate(e.target.value)}
          value={newMessageText || ''}
        />
      </div>
    </form>
  );
};

MessageInput.propTypes = {
  newMessageText: PropTypes.string,
  onMessageUpdate: PropTypes.func.isRequired,
  onAddMessage: PropTypes.func.isRequired,
};

MessageInput.defaultProps = {
  newMessageText: undefined,
};

export default withTranslation()(MessageInput);
