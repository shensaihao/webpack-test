import React, { Component } from 'react';
import {
  Switch,
  Route,
  Redirect
} from 'react-router-dom'
import routes from './routes'

class App extends Component {
  render() {
    return (
        <Switch>
          {
            routes.map(route => {
              return (
                <Route
                  key={route.path}
                  path={route.path}
                  render={(props) => {
                    return <route.component {...props} />
                  }}
                />
              )
            })
          }
          <Redirect to='/home' from='/' exact />
          <Redirect to='/404' />
        </Switch>
    );
  }
}

export default App;
