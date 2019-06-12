import React from 'react';
import PropTypes from 'prop-types';

const LoginForm = ({ email, password, onEmailUpdate, onPasswordUpdate }) => (
  <>
    {email}
    {password}
  </>
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
