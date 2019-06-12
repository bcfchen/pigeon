import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import * as messageActions from '../../redux/actions/messageActions';
import ChatWindow from '../../components/ChatWindow/ChatWindow';
import MessageInput from '../../components/MessageInput/MessageInput';
import Message from '../../models/core/Message';
import User from '../../models/core/User';

class ChatPage extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoading: false,
      newMessageText: undefined,
    };

    this.loadData = this.loadData.bind(this);
    this.handleIsLoading = this.handleIsLoading.bind(this);
    this.handleAddMessage = this.handleAddMessage.bind(this);
    this.handleUpdateMessage = this.handleUpdateMessage.bind(this);
  }

  componentDidMount() {
    this.loadData();
  }

  async loadData() {
    const { messageHandler } = this.props;
    await this.handleIsLoading(true);
    await messageHandler.loadMessagesActionCreator();
    this.handleIsLoading(false);
  }

  handleIsLoading(isLoading) {
    return new Promise((resolve) => {
      this.setState({
        isLoading,
      }, () => resolve());
    });
  }

  handleUpdateMessage(messageText) {
    this.setState({ newMessageText: messageText });
  }

  handleAddMessage() {
    const { messageHandler, userInfo } = this.props;
    const { newMessageText } = this.state;
    messageHandler.addMessageActionCreator(userInfo.id, newMessageText);
  }

  render() {
    const { myMessages, othersMessages } = this.props;
    return (
      <>
        <ChatWindow myMesssages={myMessages} othersMessages={othersMessages} />
        <MessageInput
          onAddMessage={this.handleAddMessage}
          onMessageUpdated={this.handleUpdateMessage}
        />
      </>
    );
  }
}

ChatPage.propTypes = {
  myMessages: PropTypes.arrayOf(Message).isRequired,
  othersMessages: PropTypes.arrayOf(Message).isRequired,
  messageHandler: PropTypes.objectOf(PropTypes.func).isRequired,
  userInfo: PropTypes.objectOf(User).isRequired,
};

const mapStateToProps = state => ({
  myMessages: state.message.myMessages,
  othersMessages: state.message.othersMessages,
  userInfo: state.message.othersMessages,
});

const mapDispatchToProps = dispatch => ({
  messageHandler: bindActionCreators(messageActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(ChatPage);
