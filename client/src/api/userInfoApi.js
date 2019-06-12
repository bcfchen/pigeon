import allUsers from '../data/allUsers';

export const loadAllUsers = () => (new Promise((resolve) => {
  setTimeout(() => {
    resolve(allUsers);
  }, 1000);
}));
