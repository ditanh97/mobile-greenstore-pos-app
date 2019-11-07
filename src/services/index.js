//  hold the main container
import React, {useState} from 'react';
import {Provider} from 'react-redux';
import store from './store';
import Login  from '../views/Login'



const ReduxApp = () => {

    return (
        <Provider store={store}>
            <Login/>
        </Provider>
    )
}


export default ReduxApp;