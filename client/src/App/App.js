import React from 'react';
import { Route } from 'react-router-dom';
import '../App.css';
import LoginPage from '../workflows/LoginPage/LoginPage';
import ChatPage from '../workflows/ChatPage/ChatPage';

const App = () => (
  <>
    <div className='app'>
      <Route exact path='/' component={LoginPage} />
      <Route path='/chat' component={ChatPage} />
    </div>
  </>
);

export default App;
