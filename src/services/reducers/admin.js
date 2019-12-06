import AsyncStorage from '@react-native-community/async-storage';
const initialState = {
    adminList: [],
    isRegistered: false,
    isLogin: false,
    isRejected: false,
    isLogout: false,
  };
  
  const admin = (state = initialState, action) => {
    switch (action.type) {
      case 'LOGIN_REJECTED':
        return {
          ...state,
          isLogin: false,
          isRejected: true,
        };
      case 'LOGIN_FULFILLED':
        state.adminList.push (action.payload.data);
        console.log('ini token',action.payload.data.token)
        const data = {
            username: action.payload.data.username,
            token: action.payload.data.token,
        }
        AsyncStorage.setItem('user', JSON.stringify(data));
        return {
          ...state,
          isLogin: true,
          isRejected: false,
          adminList: state.adminList,
        };
      case 'REGISTER_REJECTED':
        return {
          ...state,
          isRegistered: false,
          isRejected: true,
        };
      case 'REGISTER_FULFILLED':
        // state.adminList.push (action.payload.data.result);
        return {
          ...state,
          isRejected: false,
          isRegistered: true,
          adminList: state.adminList,
        };
      case 'LOGOUT_FULFILLED':
        AsyncStorage.removeItem('user');
        return {
          ...state,
          isLogout:true,
        };
      default:
        return state;
    }
  };
  
  export default admin;
