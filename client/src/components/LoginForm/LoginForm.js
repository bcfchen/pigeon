import React from 'react';
import PropTypes from 'prop-types';

const LoginForm = ({ email, password, onEmailUpdate, onPasswordUpdate, onSubmit }) => (
  <div className='uk-panel'>
    <div className='uk-card uk-card-body uk-align-center login-card'>
      <form onSubmit={() => onSubmit()}>
        <div className='uk-margin'>
          <div className='uk-inline uk-width-1-1'>
            <span className='uk-form-icon' uk-icon='icon: mail' />
            <input
              className='uk-input'
              type='email'
              placeholder='Enter your email'
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
              placeholder='Enter your password'
              value={password || ''}
              onChange={e => onPasswordUpdate(e.target.value)}
            />
          </div>
        </div>
        <button type='submit' className='uk-button uk-button-primary uk-width-1-1 uk-margin-small-bottom'>
          Log In
        </button>
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

export default LoginForm;
