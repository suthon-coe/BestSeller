import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

export default class BookItem extends Component {
  render() {
    return (
        <View style={styles.container}>
            <View style={styles.thumbnail}>
                <Image style={styles.image} source={{uri: this.props.imageUri}} resizeMode="contain"/>
            </View>
            <View style={styles.info}>
                <Text>{this.props.author}</Text>
                <Text style={{fontWeight: 'bold'}}>{this.props.title}</Text>                
            </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
      flex: 1, 
      flexDirection: 'row',
      borderBottomWidth: StyleSheet.hairlineWidth,
      borderBottomColor: 'blue',
      paddingTop: 4,
      paddingHorizontal: 12,
      height: 80,      
  },
  thumbnail: {
    flex: 1
  },
  info: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'flex-end'
  },
  image: {
    height: 70
  }
});
