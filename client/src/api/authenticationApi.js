import userInfo from '../data/userInfo';

export default login = (email, password) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(userInfo);
    }, 1000);
  });
}