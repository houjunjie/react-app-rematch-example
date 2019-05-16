import React from 'react'
import{ HashRouter as Router, Link} from 'react-router-dom'

class User extends React.Component{
  render(){
    return (
      <Router>
        <div>user</div>
        <Link to="/login">login</Link>
      </Router>
    )
  }
}
export default User