import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class BookItem extends Component {
  render() {
    return (
      <Text>{this.props.title}</Text>
    );
  }
}

const styles = StyleSheet.create({
  
});
