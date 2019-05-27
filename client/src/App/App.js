import React from 'react';
import { Frame } from '@shopify/polaris';
import { Route } from 'react-router-dom';
import '../App.css';
import HistoryChecker from '../components/HistoryChecker/HistoryChecker';
import ErrorIndicator from '../components/ErrorIndicator/ErrorIndicator';
import MainPage from '../workflows/MainPage/MainPage';

const App = () => (
  <Frame>
    <ErrorIndicator />
    <div className='app'>
      <HistoryChecker />
      <Route path='/main' component={MainPage} />
    </div>
  </Frame>
);

export default App;
