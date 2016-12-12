import React, {Component} from 'react';
import { Link, IndexLink } from 'react-router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actionCreators';
import NavLink from './NavLink';

class App extends Component {
  render() {
    return (
      <div>
        <div className='nav-bar'>
          <div><Link className='logo' to='/'>Words</Link></div>
          <div>
            <NavLink to='/saved'>
              Saved
            </NavLink>
          </div >
        </div>
        {React.cloneElement(this.props.children, this.props)}
      </div>
    );
  };
}

let mapStateToProps = (state) => {
  return {
    searchTerm: state.searchTerm,
    searchResults: state.searchResults,
    definitions: state.definitions
  }
}

let mapDispatchToProps = (dispatch) => {
  return  bindActionCreators(actionCreators, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
