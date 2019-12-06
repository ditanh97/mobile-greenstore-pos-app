import React, {useState} from 'react';
import  { StyleSheet, 
  Text, 
  TextInput, 
  View, 
  ImageBackground,
  Image, 
  Dimensions,
  SafeAreaView,
  StatusBar,
  KeyboardAvoidingView,
  TouchableOpacity} 
  from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import Icon from 'react-native-vector-icons/Ionicons';

import {useSelector, useDispatch} from 'react-redux';
import getJwt from '../api';
import {login, getProducts} from '../services/actions';
import logo from '../../assets/images/logo.png';
import bgImage from '../../assets/images/explore_3.jpg';



const {width: WIDTH} = Dimensions.get('window');

const Login = (props) => {
    const admin =  useSelector (state => state.admin)
    const product = useSelector(state => state.product)
    const dispatch = useDispatch()
    const [userData, setUser] = useState({username:'', token:''})
    const [state, setState] = useState({username: '', password: ''})
    const [show, setShow] = useState({showPass: true, press: false})

    const showPassword = (e) => {
      if (!show.press) {
        setShow({showPass: false, press: true})
      }else {
        setShow({showPass: true, press: false})
      }

    }
    
    const submit = async (e) => {
        e.preventDefault();
        await dispatch(login(state))
        AsyncStorage.getItem('user', (error, result) => {
          if (result) {
              let resultParsed = JSON.parse(result)
              setUser({username : resultParsed.username,
              token: resultParsed.token})
          }else{
              alert('you have not yet enter username/password')
          }
        });
        if (!userData) {
          props.navigation.navigate('Login')
          alert('You dont have an authorization to access this app!')
        } else{
          alert('You are login');
          props.navigation.navigate('Home');
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground source= {bgImage} style={styles.backgroundContainer} imageStyle=
            {{opacity:0.8}}>

                {/* <StatusBar barStyle="light-content"/> */}
                <KeyboardAvoidingView>
                    <View style={styles.logoContainer}>
                        <Image source= {logo} style={styles.logo}/>
                    </View>  
                    <View style={styles.inputContainer}>
                        <Icon name= {'ios-person'} size={26} color= {'rgba(219, 205, 198, 1)'}
                            style={styles.inputIcon}/>
                        <TextInput style={styles.input}
                            placeholder='Username'
                            placeholderTextColor= {'rgba(219, 205, 198, 1)'}
                            underlineColorAndroid= 'transparent'
                            name ="username"
                            value = {state.username}
                            onChangeText={(username) => setState({...state, username})}
                        />
                    </View>
                    <View style={styles.inputContainer}>
                        <Icon name='ios-key' size={26} color= {'rgba(219, 205, 198, 1)'}
                            style={styles.inputIcon}/>
                        <TextInput style={styles.input}
                            placeholder='Password'
                            placeholderTextColor= {'rgba(219, 205, 198, 1)'}
                            secureTextEntry={show.showPass}
                            name ="password"
                            onChangeText={(password) => setState({...state, password})}
                        />
                        <TouchableOpacity style={styles.btnEye}
                            onPress={e => showPassword(e)}>
                            <Icon name={show.press === false? 'ios-eye': 'ios-eye-off'} size ={26} color= {'rgba(219, 205, 198, 1)'}
                            />
                        </TouchableOpacity>
                    </View>

                </KeyboardAvoidingView>
                <View>
                        <TouchableOpacity style={styles.btnLogin} onPress= {(e) => submit(e) }>
                            <Text style={styles.text}>Login</Text>
                        </TouchableOpacity>
                </View>


                

            </ImageBackground>
        </SafeAreaView> 
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'flex-start',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
      padding: 16,
      paddingTop: 0
    },
    backgroundContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      width: null,
      height: null,
    },
    logoContainer: {
      alignItems: 'center',
      marginBottom: 0
    },
    logo: {
      width:250,
      height: 250,
    },
    logoText: {
      color: '#16282E',
      fontSize: 20,
      fontWeight: '500',
      marginTop: 10,
      // opacity: 0.5
    },
    input: {
      width: WIDTH - 55,
      height: 45,
      borderRadius: 25,
      fontSize:16, 
      paddingLeft: 45,
      backgroundColor: 'rgba(254, 251, 231, 1)',
      color: '#1E3740',
      marginHorizontal: 25,
      fontFamily: "Lora-Regular",
    },
    inputIcon: {
      position: 'absolute',
      top: 8,
      left: 37,
    },
    inputContainer: {
      marginTop: 10,
    },
    btnEye: {
      position: 'absolute',
      top: 8,
      right: 37,
    },
    btnLogin: {
      width: WIDTH - 55,
      height: 45,
      borderRadius: 25,
      fontSize:16, 
      backgroundColor: 'rgba(254, 251, 231, 1)',
      justifyContent: 'center',
      marginTop: 20
    },
    text: {
      color: '#1E3740',
      fontSize: 16,
      textAlign: 'center',
      fontFamily: 'Lora-Bold'
    },


  })

export default Login
