import { createStore, compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

//import root reducer
import rootReducer from './reducers/index';

const initialState = {};

export default const store = createStore(rootReducer, initialState);

export const history = synchHistoryWithStore(browserHistory, store);
