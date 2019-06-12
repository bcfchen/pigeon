import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

const NavBar = ({ match }) => {
  const isInfoMode = match.params.path.indexOf('info') > 0;
  const chatModeNav = (
    <div className="uk-navbar-right">
      <ul class="uk-navbar-nav">
        <li className="nav-icon"><a href="/info" uk-icon="icon: play-circle"></a></li>
        <li className="nav-icon"><a href="/chat" uk-icon="icon: info"></a></li>
      </ul>
    </div>
  );

  const infoModeNav = (
    <div className="uk-navbar-left">
      <ul class="uk-navbar-nav">
        <li className="nav-icon"><a href="/info" uk-icon="icon: arrow-left"></a></li>
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

export default withRouter(connect()(NavBar));
