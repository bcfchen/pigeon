import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as userInfoActions from '../../redux/actions/userInfoActions';

class InfoPage extends React.Component {
  componentDidMount() {
    const { userInfoHandler } = this.props;
    userInfoHandler.loadUsersActionCreator();
  }

  render() {
    const { users } = this.props;
    const usersList = users.map(user => <li className='user-info-item'>
      <img className="uk-margin-medium-left uk-margin-medium-right user-icon" src={user.img} width={50} height={50} alt="" />
      <span className="uk-text-middle">{user.name}</span>
    </li>);
    return (
      <div className='info-page-container'>
        <ul className='uk-list uk-list-divider'>
          {usersList}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  users: state.users.users,
});

const mapDispatchToProps = dispatch => ({
  userInfoHandler: bindActionCreators(userInfoActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(InfoPage);
