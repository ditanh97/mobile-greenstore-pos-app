import React, { Component } from "react";
import {
    StyleSheet, Image, View
} from "react-native";

import {StyleProvider, Footer, FooterTab, Button, Text, Icon, Container} from 'native-base'
import getTheme from '../../native-base-theme/components';
import commonColor from '../../native-base-theme/variables/commonColor';
import {BottomTabBar} from 'react-navigation-tabs';
import SafeAreaInset from "react-native-tab-view";

const CustomTab = (props) => {
    return (
            <StyleProvider style={getTheme(commonColor)}>
                <Footer active>
                    <FooterTab>
                    {/* <SafeAreaInset style={styles.container}
                       forceInset={{top: 'always', horizontal: 'never'}}> */}
                        <BottomTabBar 
                            activeBackgroundColor={"#DBCDC6"}
                            activeTintColor={"#FEFBE7"}
                            {...props}
                        />
                 {/* </SafeAreaInset> */}
                    </FooterTab>
                </Footer>
            </StyleProvider>
        )};

export default CustomTab;



const styles = StyleSheet.create({
    icon: {
      width: 24,
      height: 24,
    },
    textFont :{
        fontFamily:"Lora-Regular"
    },
  container:{
        flex:1,
    },
  });