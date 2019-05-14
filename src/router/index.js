/*
 * @Author: fuyiwei 
 * @Date: 2019-05-14 16:43:36 
 * @Last Modified by: fuyiwei
 * @Last Modified time: 2019-05-14 17:36:27
 */

import * as React from 'react'
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import Loadable from 'react-loadable'
import Loading from '../components/loading'

const LoginComponent = Loadable({
  loader: () => import('../pages/Login'),
  loading: Loading,
});

const HomeComponent = Loadable({
  loader: () => import('../pages/Home'),
  loading: Loading,
});

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