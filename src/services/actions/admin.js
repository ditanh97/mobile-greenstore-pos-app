import axios from 'axios';

export const login = (content) => {
const data = {
    username: content.username,
    password: content.password,
}
return {
    type: 'LOGIN',
    payload: axios.post ('https://green-store-pos.herokuapp.com/login', data), // ('/') => kalau proxy nya sudah langsung ke arah login
};
};

//'http://192.168.6.134:5000/login'

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
    payload: axios.post ('https://green-store-pos.herokuapp.com/register', data), // ('/') => kalau proxy nya sudah langsung ke arah login
};
};