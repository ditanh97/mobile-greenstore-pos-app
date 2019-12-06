import React, { Component } from "react";
import {StyleSheet} from 'react-native';
import {StyleProvider, Header, Item, Input, Button, Icon, Text} from 'native-base'
import getTheme from '../../native-base-theme/components';
import commonColor from '../../native-base-theme/variables/commonColor';

class Search extends Component {
    render() {
        return (
            <StyleProvider style={getTheme(commonColor)}>
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
            </StyleProvider>
        );
    }
}
export default Search;
const styles = StyleSheet.create({
    textFont :{
    fontFamily:"Lora-Regular",
    fontSize: 16,
  },
  });