import React from 'react';
import ReactDOM from 'react-dom';
import Search from './components/Search';
import Saved from './components/Saved';
import App from './components/App';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import './index.css';

ReactDOM.render(

  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={Search} />
      <Route path='/saved' component={Saved} />
    </Route>
  </Router>,
  document.getElementById('root')
);
