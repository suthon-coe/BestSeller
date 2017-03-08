import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class BookItem extends Component {
  render() {
    return (
        <View style={styles.container}>
            <Text>{this.props.title}..</Text>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: { 
      borderBottomWidth: StyleSheet.hairlineWidth,
      borderBottomColor: 'blue',
      paddingTop: 4,
      paddingHorizontal: 12,
      height: 64,      
  }
});
