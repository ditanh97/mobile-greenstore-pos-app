import React, { Component, useState } from 'react';
import { AppRegistry, AsyncStorage, Button, StyleSheet, Text, TextInput, View } from 'react-native';

const SampleAsyncStorage = () =>{
    const [state, setState] = useState({
        name: '',
        hobby: '',
        textName: '',
        textHobby: ''
    })
    
    AsyncStorage.getItem('name', (error, result) => {
        if (result) {
            let resultParsed = JSON.parse(result)
            setState({name: resultParsed.name, hobby:resultParsed.hobby})
        }
    })
    AsyncStorage.getItem('hobby', (error, result) => {
        if (result) {
            setState({hobby: result})
        }
    })

    const onChange = (e) => {
        setState({...state, [e.target.name] : e.target.value})
    }

    const saveData = (e) => {
        let name = state.textName;
        let hobby = state.textHobby;
        let data = {name, hobby}
        AsyncStorage.setItem('user', JSON.stringify(data));
        
   
        alert('Data tersimpan');

    }

    const showData = (e) => {
        alert('Data ditampilkan');
        AsyncStorage.getItem('user', (error, result) => {
            if (result) {
                let resultParsed = JSON.parse(result)
                console.log(resultParsed,'hh')
            }
        })
    }
 
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    Anyeong Haseyo!
                </Text>
                <Text style={styles.instructions}>
                    Nama: {state.name}{'\n'}
                    Hobi: {state.hobby}
                </Text>
                <TextInput style={styles.textInput}
                    name ="textName"
                    value = {state.textName}
                    onChangeText={(textName) => setState({...state, textName})}
                    placeholder='Nama'
                />
                <TextInput style={styles.textInput}
                    onChangeText={(textHobby) => setState({...state, textHobby})}
                    placeholder='Hobi'
                />
                <Button
                    title='Simpan'
                    onPress={(e) => {saveData(e)}}
                />
                <Button
                    title='Lihat data'
                    onPress={(e) => {showData(e)}}
                />
            </View>
        );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    padding: 16,
    paddingTop: 32
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  textInput: {
    height: 35,
    backgroundColor: 'white',
    marginTop: 8,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: 'grey',
    padding: 8
  }
});

export default SampleAsyncStorage;

