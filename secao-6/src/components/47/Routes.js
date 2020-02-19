import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Header from './Header'
import Erro from './Erro'
import Product from './Product'


const Routes = () => {
  return(
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path='/about' component={About} />
        <Route path='/product/:id' component={Product} />
        <Route path='*' component={Erro} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
