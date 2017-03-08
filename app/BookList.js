import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ListView
} from 'react-native';
import BookItem from './BookItem'

var ENDPOINT = "http://api.nytimes.com/svc/books/v3/lists/hardcover-fiction?response-format=json&api-key=73b19491b83909c7e07016f4bb4644f9:2:60667290";

export default class BookList extends Component {
  constructor(props){
      super(props)
      var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 != r2});
      this.state = {
          dataSource: ds.cloneWithRows([])
      }
  }
  componentDidMount(){
    this._refreshData();
  }

  _refreshData(){
    fetch(ENDPOINT).then((res) => res.json())
    .then((rjson) => {
        this.setState({
            dataSource: this.state.dataSource.cloneWithRows(rjson.results.books)
        })
    })
  }

  _renderRow(data){
      return <BookItem title={data.title}/>;
  }

  render() {
    return (
      <View style={styles.container}>
        <ListView dataSource={this.state.dataSource} renderRow={this._renderRow}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});
