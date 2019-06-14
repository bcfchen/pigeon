import allUsers from '../data/allUsers';

// eslint-disable-next-line
export const loadAllUsers = () => (new Promise((resolve) => {
  setTimeout(() => {
    resolve(allUsers);
  }, 1000);
}));
