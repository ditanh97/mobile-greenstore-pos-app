import React, {Component} from 'react'
import { View, 
    // Text,
    // Button, 
    StyleSheet, 
    TouchableOpacity } 
    from 'react-native';
import {
        Container,
        Header,
        Title,
        Content,
        Text,
        Button,
        Icon,
        Footer,
        FooterTab,
        Left,
        Right,
        Body, 
       } from "native-base";



export default class Checkout extends Component {
    navigationOptions = {
        header: null,
    } 
    closeDrawer = () => {
        this.drawer._root.close()
    }
    openDrawer = () => {
        this.drawer._root.open()
    }
    render(){
    return (
        
        <Container>
        <Header>
          <Left>
            <Button
              transparent
              onPress={() =>this.openDrawer()}
            >
              <Icon name="ios-menu" />
            </Button>
          </Left>
          <Body>
            <Title>Green Store</Title>
          </Body>
          <Right />
        </Header>
        <Content padder>
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={styles.title1}>Ecolize your style</Text>
                <Text style={styles.title2}>start here..</Text>
            </View>
            <View>
                <TouchableOpacity>
                    <Text>Open Drawer</Text>
                </TouchableOpacity>
                <Button onPress={() =>this.props.navigation.navigate('Browse')}  title="Go to Browse"></Button>
            </View>
        </View>
        </Content>
        </Container>
    )
}
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
        color: 'rgba(157, 175, 133, 1)',
        fontFamily: "Amiri",
    },
    title2: {
        fontSize: 20,
        alignItems: 'center',
        textAlign: 'center',
        opacity: 0.5
        
    }

})

                