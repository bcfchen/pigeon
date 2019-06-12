import userInfo from '../data/userInfo';
import User from '../models/core/User';

const login = (email, password) => (new Promise((resolve) => {
  resolve(new User({ ...userInfo, email }));
}));

export default login;
