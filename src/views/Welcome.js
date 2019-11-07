import React from 'react'
import { View, 
    Text,
    Button, 
    StyleSheet, 
    TouchableOpacity } 
    from 'react-native';
// import {} from '../components'

const Welcome = (props) => {
    const navigationOptions = {
        header: null,
    } 
    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={styles.title1}>Green, is a must</Text>
                <Text style={styles.title2}>Select start here..</Text>
            </View>
            <View>
                <TouchableOpacity>
                    <Text>Open Drawer</Text>
                </TouchableOpacity>
                <Button onPress={() =>props.navigation.navigate('Browse')}  title="Go to Browse"></Button>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    titleContainer: {
        flex: 0.3,
        justifyContent: 'center',
    },
    title1 : {
        fontSize:30,
        fontWeight: 'bold',
        color: 'rgba(157, 175, 133, 1)'
    },
    title2: {
        fontSize: 20,
        alignItems: 'center',
        textAlign: 'center',
        opacity: 0.5
        
    }

})
export default Welcome
