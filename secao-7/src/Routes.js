import React from 'react';
import {BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'

import Home from './components/Home'
import Header from './components/Header'
import Error from './components/Error'
import Movie from './pages/Movie'
import Painel from './pages/Painel'
import {autenticado} from './auth'

const PrivateRoute = ({component: Component, ...rest}) => (
  <Route {...rest} render={props => (
    autenticado() ? (
      <Component {...props} />
    ):(
      <Redirect to='/' />
    )
  )} />
)

function Routes() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/filme/:id' component={Movie} />
        <PrivateRoute path='/painel' component={Painel} />
        <Route path="*" component={Error} />
      </Switch>

    </BrowserRouter>
  );
}

export default Routes;
