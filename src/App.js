import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
// import IdleTimerContainer from './IdealTime';

function App() {
  return (
    <>
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Landing}/>
      </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
