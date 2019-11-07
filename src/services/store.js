import {createStore, applyMiddleware} from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import {createLogger} from 'redux-logger';

import {appReducer} from './reducers';

const logger = createLogger ();
const middleware = applyMiddleware (logger, promiseMiddleware);
const store = createStore (appReducer, middleware);

export default store;