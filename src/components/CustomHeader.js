import React, { Component } from "react";
import {StyleProvider, Header, Left, Body, Title, Icon, Right} from 'native-base'
import getTheme from '../../native-base-theme/components';
import commonColor from '../../native-base-theme/variables/commonColor';

const CustomHeader = ({navigation}) =>  (
    <StyleProvider style={getTheme(commonColor)}>
    <Header rounded>
        <Left><Icon name="ios-menu" 
        size={32} 
        color="#7C4A33" 
        onPress={() => navigation.openDrawer()} /></Left>
    </Header>
    </StyleProvider>
);

export default CustomHeader;