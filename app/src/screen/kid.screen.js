import React from 'react';
import {
  Dimensions,
  Image,
  SafeAreaView,
  Text,
  StyleSheet,
  ScrollView
} from 'react-native';

export default class KidScreen extends React.Component {

  static navigationOptions = ({navigation}) => {
    return {
      title: navigation.getParam('name'),
      headerTintColor: '#000'
    };
  };

  render() {
    const {name, age, img, list} = this.props.navigation.state.params;
    return (
      <ScrollView style={{flex: 1}}>
        <Image
          style={{
            width: Dimensions.get('screen').width,
            height: Dimensions.get('screen').width
          }}
          source={{uri: img}}
        />
        <Text style={style.name}>{name}</Text>
        <Text style={style.age}>age: {age}</Text>
        {list.map((giftName, key) => {
          return <Text style={style.gift} key={key}>{giftName}</Text>
        })}
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

