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
      this.setState({ isLoading }, () => resolve());
    });
  }

  handleUpdateMessage(messageText) {
    this.setState({ newMessageText: messageText });
  }

  async handleAddMessage() {
    const { messageHandler, userInfo } = this.props;
    const { newMessageText } = this.state;
    await messageHandler.addMessageActionCreator(userInfo.id, newMessageText);
    this.setState({ newMessageText: undefined });
  }

  render() {
    const { messages } = this.props;
    const { newMessageText } = this.state;
    return (
      <div className='uk-panel chat-page'>
        <ChatWindow messages={messages} />
        <div className='uk-align-center uk-margin-small-bottom uk-margin-medium-left uk-margin-medium-right uk-position-bottom'>
          <MessageInput
            newMessageText={newMessageText}
            onAddMessage={this.handleAddMessage}
            onMessageUpdate={this.handleUpdateMessage}
          />
        </div>
      </div>
    );
  }
}

ChatPage.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.shape(Message)).isRequired,
  messageHandler: PropTypes.objectOf(PropTypes.func).isRequired,
  userInfo: PropTypes.objectOf(PropTypes.shape(User)).isRequired,
};

const mapDispatchToProps = dispatch => ({
  messageHandler: bindActionCreators(messageActions, dispatch),
});

const mapStateToProps = state => ({
  messages: state.message.messages,
  userInfo: state.auth.userInfo,
});

export default connect(mapStateToProps, mapDispatchToProps)(ChatPage);
