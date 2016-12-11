import React, {Component} from 'react';
import { Link, IndexLink } from 'react-router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actionCreators';

class App extends Component {
  render() {
    return (
      <div>
        <ul>
          <li><Link to='/'>Search</Link></li>
          <li><button className='saved-page-button'><Link to='/saved'>Saved</Link></button></li>
        </ul>
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
