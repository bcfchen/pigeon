import React from 'react';
import { Route } from 'react-router-dom';
import '../App.css';
import HistoryChecker from '../components/HistoryChecker/HistoryChecker';
import ErrorIndicator from '../components/ErrorIndicator/ErrorIndicator';
import MainPage from '../workflows/MainPage/MainPage';

const App = () =>
  (
    <>
      <ErrorIndicator />
      <div className='app'>
        <HistoryChecker />
        <Route path='/' component={MainPage} />
      </div>
    </>
  );

export default App;
