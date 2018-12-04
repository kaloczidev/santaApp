import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

export default class KidListItem extends React.Component {
  render() {
    const {name, age} = this.props.data;
    return (
      <View style={styles.container}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.age}>age: {age}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#333'
  },
  name: {
    fontWeight: '900'
  },
  age: {
    fontWeight: '200'
  }
});