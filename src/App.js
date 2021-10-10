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
// import PersistentDrawerLeft from'./components/PersistentDrawerLeft';
import UserDetails from './components/UserDetails';
import Defaulter from './components/Defaulter';
import ExpenseRecords from './components/ExpenseRecords';
import MaintenanceRecords from './components/MaintenanceRecords';
import SocietyRecords from './components/SocietyRecords';
import PersonalDetails from './components/PersonalDetails';
import PersistentDrawerLeft from './components/PersistentDrawer';

function App() {
  return (
    <>
    
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Landing} />
          <Route path="/login" exact component={ValidatedLoginForm} />
          <PrivateRoute path="/UserDetails" exact component={UserDetails} name='User Details' />
          <PrivateRoute path="/Defaulter" exact component={Defaulter} name='Defaulter' />
          <PrivateRoute path="/ExpenseRecords" exact component={ExpenseRecords} name='ExpenseRecords' />
          <PrivateRoute path="/MaintenanceRecords" exact component={MaintenanceRecords} name='MaintenanceRecords' />
          <PrivateRoute path="/SocietyRecords" exact component={SocietyRecords} name='SocietyRecords' />
          {/* <PrivateRoute path="/" exact component={} name='' /> */}
          <PrivateRoute path="/PersonalDetails" exact component={PersonalDetails} name='PersonalDetails' />
          <PrivateRoute exact path="/dashboard" component={Dashboard} name='Dashboard' />
          <PrivateRoute exact path="/table" component={TableComp} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
