import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router';
import * as messageActions from '../../redux/actions/messageActions';

const NavBar = ({ match, messageHandler }) => {
  const isInfoMode = match.params.path.indexOf('info') > -1;
  const chatModeNav = (
    <div className="uk-navbar-right">
      <ul className="uk-navbar-nav">
        <li className="nav-icon">
          {/* eslint-disable-next-line */}
          <a
            href="#/"
            onClick={() => { messageHandler.loadMessagesActionCreator() }}
            uk-icon="icon: play-circle">
          </a>
        </li>
        {/* eslint-disable-next-line */}
        <li className="nav-icon"><a href="/info" uk-icon="icon: info"></a></li>
      </ul>
    </div>
  );

  const infoModeNav = (
    <div className="uk-navbar-left">
      <ul className="uk-navbar-nav">
        {/* eslint-disable-next-line */}
        <li className="nav-icon"><a href="/chat" uk-icon="icon: arrow-left"></a></li>
      </ul>
    </div>
  );

  return (
    <nav className="uk-navbar-container uk-navbar-transparent" data-uk-navbar>
      <div className="uk-navbar-center">
        {isInfoMode ? 'Info' : 'Pigeon Chat'}
      </div>
      {isInfoMode ? infoModeNav : chatModeNav}
    </nav>);
};

const mapDispatchToProps = dispatch => ({
  messageHandler: bindActionCreators(messageActions, dispatch),
});

export default withRouter(connect(null, mapDispatchToProps)(NavBar));
