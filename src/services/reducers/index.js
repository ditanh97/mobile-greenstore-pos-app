import {combineReducers} from 'redux';
import prodReducer from './product';
import admin from './admin';

export const appReducer = combineReducers({
    prodReducer,
    admin,
})