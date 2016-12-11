import React from 'react';
import ReactDOM from 'react-dom';
import Search from './components/Search';
import Saved from './components/Saved';
import App from './components/App';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './store';
import './index.css';

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path='/' component={App}>
        <IndexRoute component={Search} />
        <Route path='/saved' component={Saved} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
