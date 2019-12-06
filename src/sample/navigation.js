import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';

import test from './test';
import SampleAsyncStorage from './form';


//Switch navigator
const SwitchNav = createSwitchNavigator({
  Login: {
    screen: SampleAsyncStorage,
  },
  Auth: {
    screen: test,
  },
});

export default createAppContainer(SwitchNav);