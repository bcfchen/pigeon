const initialState = {
  errorHandler: {
    errorMessage: undefined,
  },
  auth: {
    email: undefined,
    password: undefined,
  },
  userInfo: undefined,
  message: {
    selfMessages: [],
    othersMessages: [],
  }
};

export default initialState;
