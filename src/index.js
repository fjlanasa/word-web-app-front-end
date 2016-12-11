import React from 'react';
import ReactDOM from 'react-dom';
import SearchPage from './components/SearchPage';
import SavedPage from './components/SavedPage';
import App from './components/App';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './store';
import './index.css';

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path='/' component={App}>
        <IndexRoute component={SearchPage} />
        <Route path='/saved' component={SavedPage} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
