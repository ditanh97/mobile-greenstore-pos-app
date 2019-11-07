import React from 'react';
// import {Image} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';


import Welcome from '../views/Welcome';
import Browse from '../views/Browse';
// import Explore from '../views/Explore';
// import Login from '../views/Login';
// import Product from '../views/Product';
// import Settings from '../views/Settings';


// import {theme} from '../constants';

const screens = createStackNavigator({
    Welcome,
    Browse,
    // Explore,
    // Login,
    // Product,
    // Settings,
},
{
    headerMode: "none",
},
// {
//     defaultNavigationOptions: {
//         headerMode: 'none'
//         // headerStyle: {},
//         // headerBackImage: <Image/>,
//         // headerBackTitle : null,
//         // headerLeftContainerStyle: {},
//         // headerRightContainerStyle: {},
//     }}
);

export default createAppContainer(screens);
// export default screens;