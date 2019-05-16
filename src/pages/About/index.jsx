import React from 'react'
import{ HashRouter as Router, Link} from 'react-router-dom'

export default class About extends React.Component{
  render(){
    return (
      <Router>
        <div>About</div>
        <Link to="/user">user</Link>
      </Router>
    )
  }
}