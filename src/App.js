import './App.css';
import React from 'react';
import { Switch } from 'react-router';
import { BrowserRouter, Route } from 'react-router-dom';
import Landing from './components/Landing';
// import Login_Page from './components/Login_Page';
import Dashboard from './components/Dashboard';
import TableComp from './components/Table';
import PrivateRoute from './components/PrivateRoute';
import ValidatedLoginForm from './components/ValidatedLoginForm';
import PersistentDrawerLeft from'./components/PersistentDrawerLeft';

function App() {
  return (
    <>
    
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Landing} />
          <Route path="/login" exact component={ValidatedLoginForm} />
          <PrivateRoute exact path="/dashboard" component={PersistentDrawerLeft} />
          <PrivateRoute exact path="/table" component={TableComp} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
