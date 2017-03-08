import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';
import BookList from "./app/BookList"

export default class BestSeller extends Component {
  render() {
    return (
      <BookList/>
    );
  }
}

AppRegistry.registerComponent('BestSeller', () => BestSeller);
