import React, { Component } from 'react';
import {StyleSheet} from 'react-native';
import { Container, Item, Header, Button, StyleProvider, Input, Icon, Text} from 'native-base';
import getTheme from '../../native-base-theme/components';
import commonColor from '../../native-base-theme/variables/commonColor';
import Search from '../components/Search';

export default class SearchBarExample extends Component {
    render() {
// const Explore = () => {
    return(
      <StyleProvider style={getTheme(commonColor)}>
        <Container>
        <Header searchBar rounded>
          <Item style={styles.searchContainer}>
            <Icon name='ios-search' />
            <Input placeholder='Search' style={styles.text} />
            <Icon name='ios-arrow-dropdown-circle' />
          </Item>
          <Button small transparent><Text style={styles.text}>Search</Text></Button>
        </Header>
      </Container>
      </StyleProvider>
      
    )
} 
}
const styles = StyleSheet.create({
    searchContainer: {
        backgroundColor: 'white'
    },
    text: {
        color: '#1E3740',
        fontSize: 16,
        fontFamily: 'Lora-Regular'
        // textAlign: 'center',
        
      },
})


// export default Explore;










