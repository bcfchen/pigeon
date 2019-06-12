import React from 'react';
import PropTypes from 'prop-types';

const LoginForm = ({ email, password, onEmailUpdate, onPasswordUpdate }) => (
  <div className='uk-panel'>
    <div className='uk-card uk-card-body uk-align-center pidgeon-card'>
      <h3 className='uk-card-title'>here</h3>
      <form>
        <div className='uk-margin'>
          <input
            className='uk-input'
            type='text'
            placeholder='Enter your email here'
            value={email}
            onChange={e => onEmailUpdate(e.target.value)}
          />
        </div>
        <div className='uk-margin'>
          <input
            className='uk-input'
            type='text'
            placeholder='Enter your password here'
            value={password}
            onChange={e => onPasswordUpdate(e.target.value)}
          />
        </div>
      </form>
    </div>
  </div>
);


LoginForm.propTypes = {
  email: PropTypes.string,
  onEmailUpdate: PropTypes.func.isRequired,
  password: PropTypes.string,
  onPasswordUpdate: PropTypes.func.isRequired,
};

LoginForm.defaultProps = {
  email: undefined,
  password: undefined,
};

export default LoginForm;
