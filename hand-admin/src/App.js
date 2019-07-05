import React, { Component,Fragment } from 'react';
import {
  Switch,
  Route,
  Redirect
} from 'react-router-dom'
import routes from './routes'

class App extends Component {
  render() {
    return (
      <Fragment>
      <div className="main">
        <Switch>
          {
            routes.map(route => {
              return (
                <Route
                  key={route.path}
                  path={route.path}
                  exact={route.isExact}
                  render={() => {
                    return route.path === '/'
                      ? <Redirect to='/home' />
                      : <route.component />
                  }}
                />
              )
            })
          }
          <Redirect exact to='/home' from="/" />
          <Redirect to='/404' />
        </Switch>
      </div>
    </Fragment>
    );
  }
}

export default App;
