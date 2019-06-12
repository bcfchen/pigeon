import userInfo from '../data/userInfo';
import User from '../models/core/User';

const login = (email, password) => (new Promise((resolve) => {
  setTimeout(() => {
    resolve(new User(userInfo));
  }, 1000);
}));

export default login;
