import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';
import { Router, Scene } from 'react-native-router-flux'
import BookList from "./app/BookList"
import BookDetail from "./app/BookDetail"

export default class BestSeller extends Component {
  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene key="home" component={BookList} title="Home" initial={true}/>
          <Scene key="detail" component={BookDetail} title="Detail"/>
        </Scene>
      </Router>
    );
  }
}

AppRegistry.registerComponent('BestSeller', () => BestSeller);
