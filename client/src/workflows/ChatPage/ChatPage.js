import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import * as messageActions from '../../redux/actions/messageActions';
import LoginDialog from '../../components/LoginDialog/LoginDialog';
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
    this.scrollToBottom = this.scrollToBottom.bind(this);
  }

  componentDidMount() {
    const { messages, userInfo } = this.props;
    const hasUser = userInfo && userInfo.id;
    const hasMessages = messages && messages.length > 0;
    if (hasUser && !hasMessages) {
      this.loadData().then(() => this.scrollToBottom());
    } else if (hasMessages) {
      this.scrollToBottom();
    }
  }

  componentDidUpdate(prevProps) {
    const { messages, userInfo } = this.props;
    const userLoggedIn = userInfo && !prevProps.userInfo;
    if (userLoggedIn) {
      this.loadData();
    }
    if (messages.length > prevProps.messages.length) {
      this.scrollToBottom();
    }
  }

  async loadData() {
    const { messageHandler, userInfo } = this.props;
    await this.handleIsLoading(true);
    await messageHandler.loadMessagesActionCreator(userInfo.id);
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

  scrollToBottom() {
    this.bottomElem.scrollIntoView({ behavior: 'smooth' });
  }

  async handleAddMessage() {
    const { messageHandler, userInfo } = this.props;
    const { newMessageText } = this.state;
    await messageHandler.addMessageActionCreator(userInfo.id, newMessageText);
    this.setState({ newMessageText: undefined });
  }

  render() {
    const { messages, userInfo } = this.props;
    const { newMessageText, isLoading } = this.state;
    const isLoggedIn = userInfo && userInfo.id;
    const shouldDisable = !isLoggedIn || isLoading;
    return (
      <>
        {!isLoggedIn && <div className='login-container'><LoginDialog /></div>}
        <div className={`uk-panel chat-page ${shouldDisable && 'disabled'}`}>
          <div className='chat-window-container uk-margin-small-top uk-margin-small-left uk-margin-small-right'>
            <ChatWindow messages={messages} />
            <div ref={(bottomElem) => { this.bottomElem = bottomElem; }} />
          </div>
          <div className='uk-align-center uk-margin-small-bottom uk-margin-medium-left uk-margin-medium-right uk-position-bottom'>
            <MessageInput
              newMessageText={newMessageText}
              onAddMessage={this.handleAddMessage}
              onMessageUpdate={this.handleUpdateMessage}
            />
          </div>
        </div>
      </>
    );
  }
}

ChatPage.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.shape(Message)).isRequired,
  messageHandler: PropTypes.objectOf(PropTypes.func).isRequired,
  userInfo: PropTypes.shape(User),
};

ChatPage.defaultProps = {
  userInfo: undefined,
};

const mapDispatchToProps = dispatch => ({
  messageHandler: bindActionCreators(messageActions, dispatch),
});

const mapStateToProps = state => ({
  messages: state.message.messages,
  userInfo: state.auth.userInfo,
});

export default connect(mapStateToProps, mapDispatchToProps)(ChatPage);
