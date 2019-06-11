import 'babel-polyfill';
import 'react-app-polyfill/ie11';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { persistor, store } from './redux/configureStore';
import App from './App/App';

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
