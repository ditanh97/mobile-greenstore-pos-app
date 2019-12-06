import AsyncStorage from '@react-native-community/async-storage';

export async function authHeader() {
    try{
        const user = JSON.parse( await AsyncStorage.getItem('user'));
        return {"authorization": user.token}; 
    } catch(error){
        console.log(error);
        return null;
    }   
}

// export function getJwt () {
//     console.log(error, "masuk ke getjwt")
//     AsyncStorage.getItem('user', (error, result) => {
//         if (result) {
//             let resultParsed = JSON.parse(result)
//             return {"token": resultParsed.token};
//         }else{
//             console.log(error, "error dr jwt")
//             return {};
//         }
//       });
// }
