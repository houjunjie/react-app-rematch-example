import React from 'react'
import{ HashRouter as Router, Link} from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { TitleContext }  from './context'
import Button from './button'

class Home extends React.Component{
  componentDidMount(){
    this.props.getTitle()
  }

  render(){
    return (
      <Router>
        <div>home</div>
        <Link to="/about">about</Link>
        <div>
          <TitleContext.Provider value={this.props}>
            <Button />
          </TitleContext.Provider>
        </div>
      </Router>
    )
  }
}

Home.propTypes = {
  title: PropTypes.string,
  loading: PropTypes.bool,
  getTitle: PropTypes.func,
};

const mapState = (state) => {
  console.log(state,'state')
  return {
    title: state.home.title,
    loading: state.loading.global
  };
};

const mapDispatch = (dispatch) => {
  return {
    getTitle: dispatch.home.getTitle,
  };
};

export default connect(mapState, mapDispatch)(Home);