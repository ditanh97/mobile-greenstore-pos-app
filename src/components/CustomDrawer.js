import {Content, Container, Header, Body, Image} from 'native-base';
import {StyleSheet, View} from 'react-native';
import React from 'react';
import {DrawerItems} from 'react-navigation-drawer';
import SafeAreaView from 'react-native-safe-area-view';


const CustomDrawer = (props) => {
    const translateX = props.drawerOpenProgress.interpolate({
        inputRange: [0, 1],
        outputRange: [-100, 0],
      });
    return(
    <View>
    <Container>
        <Header style={styles.drawerHeader}>
            <Body>
                <Image 
                style={styles.drawerImage}
                source={require('../../assets/images/logo.png')}/>
            </Body>
        </Header>
        <Content>
            {/* <SafeAreaView style={styles.container} */}
            {/* forceInset={{top: 'always', horizontal: 'never'}}> */}
                <DrawerItems
                      activeBackgroundColor={"#7C4A33"}
                      activeTintColor={"#FEFBE7"}
                      iconContainerStyle={styles.icons}
                      {...props}
                />
            {/* </SafeAreaView> */}
        </Content>
    </Container>
    </View>
    )} 


export default CustomDrawer;

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    drawerHeader: {
        height: 200,
        backgroundColor: '#DBCDC6'
      },
    drawerImage: {
        height: 150,
        width: 150,
        borderRadius: 75
    },
    icons: {
        width: 30
      }
})