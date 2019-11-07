import React from 'react'
import { View, Image, StyleSheet } from 'react-native'
import logo from '../../assets/images/logo.png';

const Splash = () => {
    return (
        <View style={styles.container}>
            <Image source= {logo} style={styles.logo}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
        padding: 16,
        paddingTop: 0
      },
      logo: {
        width:250,
        height: 250,
      },
})

export default Splash
