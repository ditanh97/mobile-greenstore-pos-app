import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image
} from "react-native";

import { Content, Icon, Button } from 'native-base'
import CustomHeader from '../components/CustomHeader'
//when someone hit setting, then display drawer:
//logout, reset password, reset account

export class Profile extends Component {
    render(){
        return (
            <View>
                <Text>Profile</Text>
            </View>
        )
    }
}


export class Logout extends Component {
    static navigationOptions = ({ navigation }) => ({
        title: "Logout",
        headerLeft: <Icon name="ios-menu" style={{ paddingLeft: 10 }} onPress={() => navigation.navigate('DrawerOpen')} />,
        drawerIcon:
            <Image
                source={require('../../assets/icons/exit.png')}
                style={[styles.icon]}
            />
    })
    render() {
        return (
            <View>
                <Text>Logout</Text>
            </View>
        )
    }
}
export default {
    Logout,
    Profile
}

const styles = StyleSheet.create({
    icon: {
        height: 24,
        width: 24
    }
})