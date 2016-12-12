import React, {Component} from 'react';
import { Link, IndexLink } from 'react-router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actionCreators';

class App extends Component {
  render() {
    return (
      <div>
        <div className="nav-bar">
          <div><Link to='/'>Search</Link></div>
          <div>
            <Link activeClassName='saved-page-button' to='/saved'>
              <div className='nav-button'>Saved</div>
            </Link>
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
