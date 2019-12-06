import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  Image
} from "react-native";

//library imports
import { Icon, Button, Container, Content, StyleProvider } from 'native-base'

//custom components imports 
// import CustomHeader from '../components/CustomHeader';

import getTheme from '../../native-base-theme/components';
import commonColor from '../../native-base-theme/variables/commonColor';
import Search from '../components/Search';
import {getProducts} from '../services/actions';
import {connect} from 'react-redux';

class Home extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: "Home",
    headerLeft: <Icon name="ios-menu" style={{ paddingLeft: 10 }} onPress={() => navigation.navigate('DrawerOpen')} />,
    drawerLabel: 'Notification',
    drawerIcon: ({ tintColor }) => (
      <Image
        source={require('../../assets/icons/home.png')}
        style={styles.icon}
      />
    ),
  })
  state = {
    data: '',
  }
  
  componentDidMount = async () => {
    this.props.dispatch(await getProducts());
    this.setState ({
    data: this.props.product.productList,
    });
    console.log(state.data, 'ini datanya')
  }
  
  render() {
    return (
      <StyleProvider style={getTheme(commonColor)}>
      <Container>
        <Search/>
        {/* <CustomHeader title="Home" drawerOpen={() => this.props.navigation.navigate('DrawerOpen')} /> */}
        <Content
          contentContainerStyle={{ flex: 1, alignItems: 'center', justifyContent: 'center', padding: 10 }}>
          <Button vertical 
            onPress={() => this.props.navigation.navigate('Settings')} full>
            <Text style={{ color: 'white' }}>Go To Settings Screen</Text>
            <Icon name="apps" />
          </Button>
        </Content>
      </Container>
      </StyleProvider>
    )
  }

}

const mapStateToProps = (state) => {
  return {product: state.product}
}

export default connect(mapStateToProps)(Home);


const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  },
});



