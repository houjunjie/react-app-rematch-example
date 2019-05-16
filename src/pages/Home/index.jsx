import React from 'react'
import{ HashRouter as Router, Link} from 'react-router-dom'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Home extends React.Component{
  componentDidMount(){
    this.props.getTitle()
  }

  render(){
    return (
      <Router>
        <div>home</div>
        <div>{this.props.title}</div>
        <Link to="/about">about</Link>
      </Router>
    )
  }
}

Home.propTypes = {
  title: PropTypes.string,
  loading: PropTypes.object,
  getTitle: PropTypes.func,
};

const mapState = (state) => {
  return {
    title: state.home.title,
    getTitle: {
      global: state.loading.global
    },
  };
};

const mapDispatch = (dispatch) => {
  return {
    getTitle: dispatch.home.getTitle,
  };
};

export default connect(mapState, mapDispatch)(Home);