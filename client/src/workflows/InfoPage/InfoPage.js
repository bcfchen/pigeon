import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import * as userInfoActions from '../../redux/actions/userInfoActions';
import User from '../../models/core/User';

class InfoPage extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoading: false,
    };

    this.loadData = this.loadData.bind(this);
    this.handleIsLoading = this.handleIsLoading.bind(this);
  }

  componentDidMount() {
    this.loadData();
  }

  async loadData() {
    const { userInfoHandler } = this.props;
    await this.handleIsLoading(true);
    await userInfoHandler.loadUsersActionCreator();
    this.handleIsLoading(false);
  }

  handleIsLoading(isLoading) {
    return new Promise((resolve) => {
      this.setState({ isLoading }, () => resolve());
    });
  }

  render() {
    const { users } = this.props;
    const { isLoading } = this.state;

    const usersList = users.map(user => (
      <li key={`${user.id}-${user.name}`} className='user-info-item'>
        <img className='uk-margin-medium-left uk-margin-medium-right user-icon' src={user.img} width={50} height={50} alt='' />
        <span className='uk-text-middle'>{user.name}</span>
      </li>
    ));

    return (
      <div className={`info-page-container ${isLoading && 'disabled'}`}>
        <ul className='uk-list uk-list-divider'>
          {usersList}
        </ul>
      </div>
    );
  }
}

InfoPage.propTypes = {
  userInfoHandler: PropTypes.objectOf(PropTypes.func).isRequired,
  users: PropTypes.arrayOf(PropTypes.shape(User)).isRequired,
};

const mapStateToProps = state => ({
  users: state.users.users,
});

const mapDispatchToProps = dispatch => ({
  userInfoHandler: bindActionCreators(userInfoActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(InfoPage);
