import React,{ lazy } from 'react'
import{ HashRouter as Router, Route, Switch } from 'react-router-dom'

const AboutComponent = lazy(() => import('../About'))
const HomeComponent = lazy(() => import('../Home'))
const UserComponent = lazy(() => import('../User'))
const LoginComponent = lazy(() => import('../Login'))

const Layout = () => {
  return (
    <Router>
      <Switch>
        <Route exact={true} path='/' component={HomeComponent} />
        <Route exact={true} path='/about' component={AboutComponent} />
        <Route exact={true} path='/user' component={UserComponent} />
        <Route exact={true} path='/login' component={LoginComponent} />
      </Switch>
    </Router>
  )
}

export default Layout