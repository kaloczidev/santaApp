import React from 'react';
import {
  Text,
  StyleSheet,
  ScrollView
} from 'react-native';

export default class GiftsScreen extends React.Component {

  render() {
    return (
      <ScrollView style={{flex: 1}}>
          <Text>heló</Text>
      </ScrollView>
    );
  }
}

const style = StyleSheet.create({
  name: {
    fontSize: 32,
    fontWeight: '900',
    paddingTop: 10,
    paddingLeft: 20,
    paddingBottom: 10,
  },
  age: {
    paddingLeft: 20,
    paddingBottom: 10,
    fontSize: 22,
    fontWeight: '100'
  },
  gift: {
    fontWeight: '400',
    fontSize: 18,
    paddingLeft: 20,
    paddingTop: 5,
    paddingBottom: 5
  }
});

