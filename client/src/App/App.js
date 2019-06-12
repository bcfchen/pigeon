import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import '../App.css';
import LoginPage from '../workflows/LoginPage/LoginPage';
import ChatPage from '../workflows/ChatPage/ChatPage';
import InfoPage from '../workflows/InfoPage/InfoPage';
import NavBar from '../components/NavBar/NavBar';

const App = () => (
  <>
    <div className='app'>
      <Router>
        <>
          <Route path='/:path' component={NavBar} />
          <Route exact path='/' component={LoginPage} />
          <Route path='/chat' component={ChatPage} />
          <Route path='/info' component={InfoPage} />
        </>
      </Router>
    </div>
  </>
);

export default App;
