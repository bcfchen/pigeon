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
    const usersList = users.map(user => <li>

    </li>);
    return (
      <>
        <ul>

        </ul>
      </>
    );
  }
}

const mapStateToProps = state => ({
  users: state.info.users,
});

const mapDispatchToProps = dispatch => ({
  userInfoHandler: bindActionCreators(userInfoActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(InfoPage);
