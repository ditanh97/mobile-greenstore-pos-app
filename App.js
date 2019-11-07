// import React from 'react';
// import {
//   StyleSheet,
//   View,
//   Text,
// } from 'react-native';
// // =================== splash screen
// // import {AppLoading, Asset} from 'expo';
// //====================

// import Navigation from './src/navigation';
// import * as constants from './src/constants';

// //import here the images from assets especially icon folder in array
// //const images = [require('path1'), require('path2)]

// const App = () => {
//   /*state = {isLoadingComplete: false}*/

//   /**
//    * put here caching method for the images, use 
//    * react-native-cached-image
//    * handleResourcesAsync = async () => {
//    *  const cacheImages = images.map(img =>{
//    *    return Asset.fromModule(img).downloadAsync();
//    * }
//    * return Promise.all(cacheImages)
//    * )}
//    */

//    /*
//    const imageLoad = () => {
//    if (state.isLoadingComplete && props.skipLoadingScreen){
//      return (
//        <AppLoading startAsync=(handleResourceAsync) 
//         onError = (err => console.warn(err)) 
//         onFinish =(() => setState({isLoadingComplete:true}))/>
//      )
//    }}
//    */

//   return (
//     // {imageLoad}
//     <View style={styles.sectionContainer}>
//       <Navigation/>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   sectionContainer: {
//     flex: 1, 
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center'
//   },
// });

// export default App;




//======================INI YANG MASIH AWAL====================================

import React from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';
import ReduxApp from './src/services'
import SampleAsyncStorage from './src/views/Auth';

// const App: () => React$Node = () =>
const App = () => {
  return (
    <View style={styles.sectionContainer}>
      {/* <Text style= {{fontSize:30}}>Dita Nurhalimah</Text>
      <Text style= {{color: 'green', fontSize:25}}>Fullstack Engineer</Text> */}
      {/* <SampleAsyncStorage/> */}
      <ReduxApp/>
    </View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1, 
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
});

export default App;