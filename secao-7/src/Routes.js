import React from 'react';
import {BrowserRouter, Route, Switch } from 'react-router-dom'

import Home from './components/Home'
import Header from './components/Header'
import Error from './components/Error'
function Routes() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path="*" component={Error} />
      </Switch>

    </BrowserRouter>
  );
}

export default Routes;
