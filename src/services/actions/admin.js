import axios from 'axios';
import {API_URL} from 'react-native-dotenv'

export const login = (content) => {
const data = {
    username: content.username,
    password: content.password,
}
return {
    type: 'LOGIN',
    payload: axios.post (`${API_URL}/login`, data), // ('/') => kalau proxy nya sudah langsung ke arah login
};
};


export const logout = () => {
    return {
        type: 'LOGOUT',
        payload: 'successfully logging out', // ('/') => kalau proxy nya sudah langsung ke arah login
    };
    };


export const register = (username, password, email) => {
const data = {
    username: username,
    password: password,
    email: email,
}
return {
    type: 'REGISTER',
    payload: axios.post (`${API_URL}/register`, data), // ('/') => kalau proxy nya sudah langsung ke arah login
};
};