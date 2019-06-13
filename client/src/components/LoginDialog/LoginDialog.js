import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import * as authActions from '../../redux/actions/authActions';
import LoginForm from '../LoginForm/LoginForm';

class LoginDialog extends React.Component {
  constructor() {
    super();
    this.state = {
      email: undefined,
      password: undefined,
    };

    this.handleLogin = this.handleLogin.bind(this);
    this.handleEmailUpdate = this.handleEmailUpdate.bind(this);
    this.handlePasswordUpdate = this.handlePasswordUpdate.bind(this);
  }

  async handleLogin() {
    const { authHandler } = this.props;
    const { email, password } = this.state;
    await authHandler.loginActionCreator(email, password);
  }

  handleEmailUpdate(email) {
    this.setState({ email });
  }

  handlePasswordUpdate(password) {
    this.setState({ password });
  }

  render() {
    const { email, password } = this.state;
    return (
      <>
        <div className='login-dialog'>
          <LoginForm
            email={email}
            password={password}
            onEmailUpdate={this.handleEmailUpdate}
            onPasswordUpdate={this.handlePasswordUpdate}
            onSubmit={this.handleLogin}
          />
        </div>
      </>
    );
  }
}

LoginDialog.propTypes = {
  authHandler: PropTypes.objectOf(PropTypes.func).isRequired,
};

const mapStateToProps = state => ({
  userInfo: state.auth.userInfo,
});

const mapDispatchToProps = dispatch => ({
  authHandler: bindActionCreators(authActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginDialog);
