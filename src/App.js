import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Login from './Login/Login';
import Invoices from './Invoices/Invoices';
import './App.css';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <div>
          {/* <Redirect
            from=""
            to="/inblock/ey/login" /> */}
          <Switch>
            <Route
              path="/inblock/ey/login"
              component={Login} />
            <Route
              path="/inblock/ey/invoices"
              component={Invoices} />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
