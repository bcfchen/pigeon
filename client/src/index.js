import 'babel-polyfill';
import 'react-app-polyfill/ie11';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import Amplify from 'aws-amplify';
import { AppProvider } from '@shopify/polaris';
import '@shopify/polaris/styles.css';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { persistor, store } from './redux/configureStore';
import config from './config';
import App from './App/App';

const theme = {
  colors: {
    topBar: {
      background: 'white',
      backgroundDarker: '#white',
      backgroundLighter: '#fafafa',
      color: 'gray',
    },
  },
  logo: {
    width: 40,
    topBarSource:
      'https://asset.japan.travel/image/upload/v1515551210/static/svg/common/logo_black.svg',
    url: '/main',
    accessibilityLabel: 'Sakaar UI',
  },
};

Amplify.configure({
  Auth: {
    mandatorySignIn: false,
    region: config.cognito.REGION,
    userPoolId: config.cognito.USER_POOL_ID,
    userPoolWebClientId: config.cognito.APP_CLIENT_ID,
  },
  API: {
    endpoints: [
      {
        name: 'sakaar',
        endpoint: config.apiGateway.URL,
        region: config.apiGateway.REGION,
      },
    ],
  },
});

ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <AppProvider theme={theme}>
        <Router>
          <App />
        </Router>
      </AppProvider>
    </PersistGate>
  </Provider>,
  document.getElementById('root'),
);
