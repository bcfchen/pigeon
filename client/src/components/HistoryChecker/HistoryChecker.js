import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

const HistoryChecker = ({ userInfoComposite, signedInUser, history }) => {
  const userSignedIn = userInfoComposite.user.id && signedInUser.username;
  if (history.location.pathname === '/' && userSignedIn) {
    history.push('/main');
  }

  return null;
};

const mapStateToProps = state => ({
  userInfoComposite: state.user.userInfoComposite,
  signedInUser: state.user.signedInUser,
});

export default withRouter(connect(mapStateToProps, null)(HistoryChecker));
