import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Toast } from '@shopify/polaris';
import * as errorHandlerActions from '../../redux/actions/errorHandlerActions';

class ErrorIndicator extends React.Component {
  constructor() {
    super();
    this.dismissError = this.dismissError.bind(this);
  }

  dismissError() {
    const { errorHandlers } = this.props;
    errorHandlers.dismissErrorMessage();
  }

  render() {
    const { errorMessage } = this.props;
    const requestFailedMessage = `Request failed with error: ${errorMessage}`;
    return (
      <div>
        {errorMessage
          && (
            <Toast
              content={requestFailedMessage}
              onDismiss={this.dismissError}
            />
          )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  errorMessage: state.errorHandler.errorMessage,
});

const mapDispatchToProps = dispatch => ({
  errorHandlers: bindActionCreators(errorHandlerActions, dispatch),
});

ErrorIndicator.propTypes = {
  errorMessage: PropTypes.string,
  errorHandlers: PropTypes.objectOf(PropTypes.func).isRequired,
};

ErrorIndicator.defaultProps = {
  errorMessage: undefined,
};

export default connect(mapStateToProps, mapDispatchToProps)(ErrorIndicator);
