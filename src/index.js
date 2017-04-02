import React from 'react';
import ReactDOM from 'react-dom';
import SearchPage from './components/SearchPage';
import SavedPage from './components/SavedPage';
import NotFoundPage from './components/NotFoundPage';
import App from './components/App';
import { Router, Route, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './store';
import './index.css';
import './medium.css';
import './large.css';

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path='/' component={App}>
        <IndexRoute component={SearchPage} />
        <Route path='/saved' component={SavedPage} />
        {/* Great work on adding in a catch all no tfound page!*/}
        <Route path='*' component={NotFoundPage} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
