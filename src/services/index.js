//  hold the main container
import React from 'react';
import {Provider} from 'react-redux';

import store from './store';
import Screens from '../navigation';
import {StyleProvider} from 'native-base';
import getTheme from '../../native-base-theme/components';
import commonColor from '../../native-base-theme/variables/commonColor';


const ReduxApp = () => {
    return (
        <Provider store={store}>
            <StyleProvider style={getTheme(commonColor)}>
                <Screens/>
            </StyleProvider>
        </Provider>
    )
}


export default ReduxApp;