import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import App from './App'
import { NotFound } from './pages'

ReactDOM.render(
  <Router>
    <Switch>
      <Route
        path="/home"
        component={App}
      />
      <Route
        path="/404"
        component={NotFound}
      />
      <Redirect to='/home' from='/' exact />
      <Redirect to='/404' />
    </Switch>
  </Router>,
  document.getElementById('root')
);