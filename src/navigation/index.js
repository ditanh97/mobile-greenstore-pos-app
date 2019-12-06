//import React to solve the issue in line 155
import React from 'react';
//style
import {Image, StyleSheet} from 'react-native';

//drawer, tab
import CustomDrawer from '../components/CustomDrawer';
import CustomTab from '../components/CustomTab';

//navigation
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createDrawerNavigator} from 'react-navigation-drawer'


//auth stack
// import Splash from '../components/Splash';
import Login from '../screens/Login';
import Signup from '../screens/Signup';
import Forgot from '../screens/Forgot';

//main tab
import Home from '../screens/Home';
import Report from '../screens/Report';
import Checkout from '../screens/Checkout'
import Explore from '../screens/Explore';
import {Profile, Logout} from '../screens/Settings';



const AuthStack = createStackNavigator({
    Login : {
        screen: Login,
        navigationOptions: {
            headerTitle: 'Login',
        },
    },
    SignUp : {
        screen: Signup,
        navigationOptions: {
            headerTitle: 'Sign Up',
        },
    },
    ForgotPassword : {
        screen: Forgot,
        navigationOptions: {
            headerTitle: 'Forgot Password',
        },
    },    
},
{
    headerMode: "none"
}
);

const SettingDrawer = createDrawerNavigator(
    {
        Profile: {
            navigationOptions: {
                drawerIcon: ({tintColor}) => (
                    <Image
                    source={require('../../assets/icons/profile.png')}
                    style={styles.icon}
                    />
                ),
                drawerLabel: 'Profile'
            },
            screen: Profile
        },
        Logout: {
            navigationOptions: {
                drawerIcon: ({tintColor}) => (
                    <Image
                    source={require('../../assets/icons/exit.png')}
                    style={styles.icon}
                    />
                ),
                drawerLabel: 'Logout'
            },
            screen: Logout
        },
    },
    {
        contentComponent: props => <CustomDrawer {...props} />
    }
);


const MainTabs = createBottomTabNavigator(
    {
        Home: {
            navigationOptions: {
                tabBarIcon: ({tintColor}) => (
                    <Image
                    source={require('../../assets/icons/home.png')}
                    style={styles.icon}
                    />
                ),
                tabBarLabel: 'Home'
            },
            screen: Home
        },
        Data: {
            navigationOptions: {
                tabBarIcon: ({tintColor}) => (
                    <Image
                    source={require('../../assets/icons/data.png')}
                    style={styles.icon}
                    />
                ),
                tabBarLabel: 'Data'
            },
            screen: Report
        },
        Checkout: {
            navigationOptions: {
                tabBarIcon: ({tintColor}) => (
                    <Image
                    source={require('../../assets/icons/cart.png')}
                    style={styles.iconCheck}
                    />
                ),
                tabBarLabel: 'Checkout'
            },
            screen: Checkout
        },
        Explore: {
            navigationOptions: {
                tabBarIcon: ({tintColor}) => (
                    <Image
                    source={require('../../assets/icons/explore.png')}
                    style={styles.icon}
                    />
                ),
                tabBarLabel: 'Explore'
            },
            screen: Explore
        },     
        Settings: {
            navigationOptions: {
                tabBarIcon: ({tintColor}) => (
                    <Image
                    source={require('../../assets/icons/setting.png')}
                    style={styles.icon}
                    />
                ),
                tabBarLabel: 'Settings'
            },
            screen: SettingDrawer
        }, 
    },
    {   
        tabBarOptions:{
            activeTintColor: "#7C4A33",
            activeBackgroundColor: "#DBCDC6",
            style: {
                backgroundColor: '#7C4A33',
                color: "#DBCDC6",
                
                
            }
        } ,
        // tabBarComponent: props => <CustomTab {...props} /> 
        // tabBarComponent: CustomTab 
    }
);

const Screens = createSwitchNavigator({
    Auth: {
        screen: AuthStack,
    }, 
    App: {
        screen: MainTabs,
    }, 
});

export default createAppContainer(Screens);


const styles = StyleSheet.create({
    icon: {
      width: 30,
      height: 30,
    },
    iconCheck: {
        width: 35,
        height: 35,
      },
  });


