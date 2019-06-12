import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import * as authActions from '../../redux/actions/authActions';
import LoginForm from '../../components/LoginForm';

class LoginPage extends React.Component {
  constructor() {
    super();
    this.state = {
      email: undefined,
      password: undefined,
      isLoading: false,
    };

    this.handleEmailUpdate = this.handleEmailUpdate.bind(this);
    this.handlePasswordUpdate = this.handlePasswordUpdate.bind(this);
  }

  

  handleEmailUpdate(email) {
    this.setState({
      email,
    });
  }

  handlePasswordUpdate(password) {
    this.setState({
      password,
    });
  }

  render() {
    const { email, password } = this.state;
    return (
      <>
        <LoginForm
          email={email}
          password={password}
          onEmailUpdate={this.handleEmailUpdate}
          onPasswordUpdate={this.handlePasswordUpdate}
        />
      </>
    );
  }
}

LoginPage.propTypes = {
  authHandler: PropTypes.objectOf(PropTypes.func).isRequired,
};

const mapStateToProps = state => ({
  myMessages: state.message.myMessages,
  othersMessages: state.message.othersMessages,
  userInfo: state.message.othersMessages,
});

const mapDispatchToProps = dispatch => ({
  authHandler: bindActionCreators(authActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
