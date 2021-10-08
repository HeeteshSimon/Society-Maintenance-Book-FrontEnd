import './App.css';
import React from 'react';
import { Switch } from 'react-router';
import { BrowserRouter,Route } from 'react-router-dom';
// import IdleTimerContainer from './IdealTime';
import {Landing} from './Components/Pages/Landing';
import {Login} from './Components/Pages/Login';

function App() {
  return (
    <>
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Landing}/>
        <Route path="/login" exact component={Login}/>
      </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
