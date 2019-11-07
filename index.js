/**
 * @format
 */
import React, {useState, Component} from 'react';
import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import App from './App';
import Splash from './src/components/Splash';
import Welcome from './src/views/Welcome';
import Browse from './src/views/Browse';
import  screens from './src/navigation'

// const Main = (props) =>{
//     const [state,setState] = useState({
//         currentScreen: 'Splash',
//     })
//     setTimeout( () => {
//         setState({currentScreen: 'App'})
//     }, 3000)

//     const splash = () => {
//         const {currentScreen} = state
//         let mainScreen = currentScreen === 'Splash' ? <Splash/> : <App/>
//         return mainScreen
//     }
//     return (
//         {splash}
//     )
// }

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

// AppRegistry.registerComponent(appName, () => Browse);
// AppRegistry.registerComponent(appName, () => screens);