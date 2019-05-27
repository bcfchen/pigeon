export default {
  apiGateway: {
    REGION: process.env.REACT_APP_AWS_REGION,
    URL: process.env.REACT_APP_API_GATEWAY_URL,
  },
  cognito: {
    REGION: process.env.REACT_APP_AWS_REGION,
    USER_POOL_ID: process.env.REACT_APP_USER_POOL_ID,
    APP_CLIENT_ID: process.env.REACT_APP_COGNITO_CLIENT_ID,
  },
};
