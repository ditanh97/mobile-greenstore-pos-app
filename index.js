/**
 * @format
 */
import React, {Component} from 'react';
import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import App from './App';
import Splash from './src/components/Splash';

//testing modules
import test from './src/sample/test';
import Checkout from './src/screens/Checkout';
import SwitchNav from './src/sample/navigation';


class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {currentScreen: 'Splash'};
        setTimeout( ()=> {
            this.setState({currentScreen: 'App'})
        }, 2000)
    }
    render() {
        const {currentScreen} = this.state
        let mainScreen = currentScreen === 'Splash' ? <Splash/> : <App/>
        return mainScreen       
    }
}

AppRegistry.registerComponent(appName, () => Main);



//testing registers
// AppRegistry.registerComponent(appName, () => test);
// AppRegistry.registerComponent(appName, () => Welcome);
// AppRegistry.registerComponent(appName, () => SwitchNav);