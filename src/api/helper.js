import {AsyncStorage} from 'react-native';

export function authHeader() {
    let user = AsyncStorage.getItem('user');

    if (user) {
        return {"authorization" : user.token};
          // return { 'Authorization': 'Bearer ' + user.token };
    } else {
        return {};
    }
}