import React from 'react'
import{ HashRouter as Router, Link } from 'react-router-dom'
import { Button } from 'antd';

class About extends React.Component{
  _history = () =>{
    this.props.history.push('/')
  }
  render(){
    return (
      <Router>
        <div>About</div>
        <Link to="/user">user</Link>
        <Button onClick={this._history}>history</Button>
      </Router>
    )
  }
}

export default About