/*
 * @Author: fuyiwei 
 * @Date: 2019-05-14 16:43:36 
 * @Last Modified by: fuyiwei
 * @Last Modified time: 2019-05-15 17:03:19
 */

import React, { lazy } from 'react'
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom'

const LoginComponent = lazy(() => import('../pages/Login'))

const HomeComponent = lazy(() => import('../pages/Home'))

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      localStorage.getItem('Token') ? (
        <Component {...props} />
      ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: props.location }
            }}
          />
        )
    }
  />
)

export default class Routers extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/login" component={LoginComponent} />
          <PrivateRoute component={HomeComponent} />
        </Switch>
      </Router>
    )
  }
}