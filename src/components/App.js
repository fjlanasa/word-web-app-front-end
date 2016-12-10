import React, {Component} from 'react';
import { Link, IndexLink } from 'react-router';

class App extends Component {
  render() {
    return (
      <div>
        <ul>
          <li><Link to='/'>Search</Link></li>
          <li><Link to='/saved'>Saved</Link></li>
        </ul>
        {this.props.children}
      </div>
    );
  };
}

export default App;
