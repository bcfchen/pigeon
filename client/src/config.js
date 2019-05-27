export default {
  apiGateway: {
    REGION: process.env.REACT_APP_AWS_REGION,
    ELB: process.env.REACT_APP_ELB,
    URL: process.env.REACT_APP_API_GATEWAY_URL,
  },
  cognito: {
    REGION: process.env.REACT_APP_AWS_REGION,
    USER_POOL_ID: process.env.REACT_APP_USER_POOL_ID,
    APP_CLIENT_ID: process.env.REACT_APP_COGNITO_CLIENT_ID,
  },
  algolia: {
    API_KEY: process.env.REACT_APP_ALGOLIA_API_KEY,
    APP_ID: process.env.REACT_APP_ALGOLIA_APP_ID,
    INDEX_NAME: process.env.REACT_APP_ALGOLIA_INDEX_NAME,
    AUTO_TAGS_INDEX_NAME: process.env.REACT_APP_ALGOLIA_AUTO_TAGS_INDEX_NAME,
  },
};
