import React from 'react'
import{ HashRouter as Router, Link} from 'react-router-dom'


export default class Home extends React.Component{
  render(){
    return (
      <Router>
        <div>home</div>
        <Link to="/about">about</Link>
      </Router>
    )
  }
}