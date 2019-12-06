import React, { Component } from 'react';
import {StyleSheet, Image} from 'react-native';
import {StyleProvider, Content, Item, Input, Text, Container, Header, Title, Button, Left, Right, Body, Icon, Footer,
FooterTab, Accordion} from 'native-base';
import getTheme from '../../native-base-theme/components';
import commonColor from '../../native-base-theme/variables/commonColor';
const dataArray = [
    { title: "First Element", content: "Lorem ipsum dolor sit amet" },
    { title: "Second Element", content: "Lorem ipsum dolor sit amet" },
    { title: "Third Element", content: "Lorem ipsum dolor sit amet" }
  ];

class test extends Component {
  render() {
    return (
      <StyleProvider style= {getTheme(commonColor)}>
      <Container>
        <Header searchBar rounded>
           <Item >
            <Icon name="ios-search" />
            <Input placeholder="Search" style={styles.textFont}/>
            <Icon name="ios-arrow-dropdown-circle" />
          </Item>
          <Button transparent>
            <Text >Search</Text>
          </Button>
        </Header>
        <Content padder>
          <Text style={styles.textFont}>
            This is Accordion
          </Text>
          <Accordion  dataArray={dataArray} expanded={0} icon="add" expandedIcon="remove"/>
          <Button vertical onPress={() => this.props.navigation.navigate("Login")}>
              <Text style={styles.textFont}>Go to Login</Text>
            </Button>
        </Content>
        <Footer active>
        <FooterTab>
            <Button vertical >
              <Icon name="apps" />
              <Text style={styles.textFont}>Apps</Text>
            </Button>
            <Button vertical>
              <Icon name="camera" />
              <Text style={styles.textFont}>Cart</Text>
            </Button>
            <Button vertical active>
              <Icon active name="navigate" />
              <Text style={styles.textFont}>Navigate</Text>
            </Button>
            <Button vertical>
            <Image 
            source={require('../../assets/icons/home.png')}
            style={styles.icon}
           />
              <Text style={styles.textFont}>Contact</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
      </StyleProvider>
    );
  }
}

export default test

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  },
  textFont :{
  fontFamily:"Lora-Regular"
},
});


//<Icon name="person" />