import React from 'react';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import * as localeUtils from '../../utilities/localeUtils';

const LoginForm = ({ email, password, onEmailUpdate, onPasswordUpdate, onSubmit, t }) => (
  <div className='uk-panel'>
    <div className='uk-card uk-card-body uk-align-center login-card'>
      <form onSubmit={() => onSubmit()}>
        <div className='uk-margin'>
          <div className='uk-inline uk-width-1-1'>
            <span className='uk-form-icon' uk-icon='icon: mail' />
            <input
              className='uk-input'
              type='email'
              placeholder={t('enterYourEmail')}
              value={email || ''}
              onChange={e => onEmailUpdate(e.target.value)}
            />
          </div>
        </div>
        <div className='uk-margin'>
          <div className='uk-inline uk-width-1-1'>
            <span className='uk-form-icon' uk-icon='icon: lock' />
            <input
              className='uk-input'
              type='password'
              placeholder={t('enterYourPassword')}
              value={password || ''}
              onChange={e => onPasswordUpdate(e.target.value)}
            />
          </div>
        </div>
        <button type='submit' className='uk-button uk-button-primary uk-width-1-1 uk-margin-small-bottom'>
          {t('login')}
        </button>
        <ul className='uk-subnav uk-subnav-pill' uk-switcher>
          <li>
            {/* eslint-disable-next-line*/}
            <a href="#" onClick={() => { localeUtils.switchLocale('en') }}>{t('english')}</a>
          </li>
          <li>
            {/* eslint-disable-next-line*/}
            <a href="#" onClick={() => { localeUtils.switchLocale('ch') }}>{t('chinese')}</a>
          </li>
        </ul>
      </form>
    </div>
  </div>
);


LoginForm.propTypes = {
  email: PropTypes.string,
  onEmailUpdate: PropTypes.func.isRequired,
  password: PropTypes.string,
  onPasswordUpdate: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

LoginForm.defaultProps = {
  email: undefined,
  password: undefined,
};

export default withTranslation()(LoginForm);
