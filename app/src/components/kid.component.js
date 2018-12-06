import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

export default class KidComponent extends React.Component {
  render () {
    const {name, age} = this.props.kid;
    return (
      <View style={styles.wrapper}>
        <Text style={styles.name}> {name} </Text>
        <Text style={styles.age}> age: {age} </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomColor: '#333',
    borderBottomWidth: StyleSheet.hairlineWidth
  },
  name: {
    fontWeight: '900'
  },
  age: {
    fontWeight: '200'
  }
});

