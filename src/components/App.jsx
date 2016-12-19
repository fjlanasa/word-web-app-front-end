import React, {Component} from 'react';
import { Link } from 'react-router';
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

// React Redux actually gives you a bit of a shortcut now that you can take
// advantage of.  If you're not changing the names of your actions you can just
// pass in a JS object and it will bind them for you automatically.
export default connect(
  mapStateToProps,
  actionCreators,
)(App);
