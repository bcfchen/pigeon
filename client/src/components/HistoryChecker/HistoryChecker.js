import { withRouter } from 'react-router-dom';

const HistoryChecker = ({ history }) => {
  if (history.location.pathname === '/') {
    history.push('/main');
  }

  return null;
};

export default withRouter(HistoryChecker);
