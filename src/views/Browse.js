import React from 'react'
import { View, Text, TouchableOpacity, Image, StyleSheet, Button } from 'react-native'

import stuff from '../../assets/images/explore_4.jpg'

const Browse = (props) => {
    return (
        <View>
            <View style={styles.cardContainer}>
                <TouchableOpacity style={styles.card}>
                <Image source= {stuff} style={styles.cardImg}/>
                <Text style={styles.cardText}>Stuff</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.navContainer}>
                <Button onPress={() =>props.navigation.navigate('Welcome')}  title="Go to Welcome"></Button>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    cardContainer :{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    card: {
        // width: WIDTH - 55,
        // height: 45,
        borderRadius: 25,
        fontSize:16, 
        paddingLeft: 45,
        backgroundColor: 'rgba(254, 251, 231, 1)',
        color: '#1E3740',
        marginHorizontal: 25,
      },
    cardImg: {
        width:250,
        height: 250,
    },
    cardText: {
    },
    navContainer: {
        marginTop: 10
    }
})
export default Browse
