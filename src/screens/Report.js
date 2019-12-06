// import React from 'react'
// import { View, Text, TouchableOpacity, Image, StyleSheet, Button } from 'react-native'
// import stuff from '../../assets/images/explore_4.jpg'

// const Report = (props) => {
//     return (
//         <View>
//             <View style={styles.cardContainer}>
//                 <TouchableOpacity style={styles.card}>
//                 <Image source= {stuff} style={styles.cardImg}/>
//                 <Text style={styles.cardText}>Stuff</Text>
//                 </TouchableOpacity>
//             </View>
//             <View style={styles.navContainer}>
//                 <Button onPress={() =>props.navigation.navigate('Welcome')}  title="Go to Welcome"></Button>
//                 <Button onPress={() =>props.navigation.navigate('Explore')}  title="Go to Explore"></Button>
//             </View>
//         </View>
//     )
// }

// const styles = StyleSheet.create({
//     cardContainer :{
//         flex:1,
//         justifyContent: 'center',
//         alignItems: 'center',
//     },
//     card: {
//         // width: WIDTH - 55,
//         // height: 45,
//         borderRadius: 25,
//         fontSize:16, 
//         paddingLeft: 45,
//         backgroundColor: 'rgba(254, 251, 231, 1)',
//         color: '#1E3740',
//         marginHorizontal: 25,
//       },
//     cardImg: {
//         width:250,
//         height: 250,
//     },
//     cardText: {
//     },
//     navContainer: {
//         marginTop: 10
//     }
// })
// export default Report


import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';

export default class Report extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Content>
          <Card>
            <CardItem cardBody>
              <Image source={require('../../assets/images/bulk-groceries.jpg')} style={{height: 100, width: null, flex: 1}}/>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent>
                  <Icon/>
                  <Text>Bulk Groceries</Text>
                </Button>
              </Left>
              <Body>
                <Button transparent>
                  <Icon active name="cart" />
                  <Text>- Products</Text>
                </Button>
              </Body>
              <Right>
                <Text>- h ago</Text>
              </Right>
            </CardItem>
          </Card>
          <Card>
            <CardItem cardBody>
              <Image source={require('../../assets/images/accessories.jpg')} style={{height: 100, width: null, flex: 1}}/>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent>
                  <Icon/>
                  <Text>Misc Things</Text>
                </Button>
              </Left>
              <Body>
                <Button transparent>
                  <Icon active name="cart" />
                  <Text>- Products</Text>
                </Button>
              </Body>
              <Right>
                <Text>- h ago</Text>
              </Right>
            </CardItem>
          </Card>
          <Card>
            <CardItem cardBody>
              <Image source={require('../../assets/images/outfit.jpg')} style={{height: 100, width: null, flex: 1}}/>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent>
                  <Icon/>
                  <Text>Outfit</Text>
                </Button>
              </Left>
              <Body>
                <Button transparent>
                  <Icon active name="cart" />
                  <Text>- Products</Text>
                </Button>
              </Body>
              <Right>
                <Text>-h ago</Text>
              </Right>
            </CardItem>
          </Card>
          <Card>
            <CardItem cardBody>
              <Image source={require('../../assets/images/toy.jpg')} style={{height: 100, width: null, flex: 1}}/>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent>
                  <Icon/>
                  <Text>Toys</Text>
                </Button>
              </Left>
              <Body>
                <Button transparent>
                  <Icon active name="cart" />
                  <Text>- Products</Text>
                </Button>
              </Body>
              <Right>
                <Text>-h ago</Text>
              </Right>
            </CardItem>
          </Card>
          <Card>
            <CardItem cardBody>
              <Image source={require('../../assets/images/utensil.jpg')} style={{height: 100, width: null, flex: 1}}/>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent>
                  <Icon/>
                  <Text>Utensil</Text>
                </Button>
              </Left>
              <Body>
                <Button transparent>
                  <Icon active name="cart" />
                  <Text>- Products</Text>
                </Button>
              </Body>
              <Right>
                <Text>-h ago</Text>
              </Right>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}




