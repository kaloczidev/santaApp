import React from 'react';
import {Text, View, StyleSheet, Image, Dimensions, ScrollView} from 'react-native';
import {MapView} from 'expo';
import {connect} from 'react-redux';

class KidDetailScreen extends React.Component {
  static navigationOptions = ({navigation}) => {
    return {
      title: navigation.getParam('name'),
      headerTitleStyle: {
        fontWeight: '900',
      },
      headerTintColor: '#000'
    };
  };

  render() {
    const {name, age, img} = this.props.navigation.state.params;
    const dim = Dimensions.get('screen').width;
    return (
      <ScrollView style={{
        flex: 1
      }}>
        <Image
          style={{width: dim, height: dim}}
          source={{uri: img}}
        />
        <View style={styles.ageContainer}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.age}>age: {age} </Text>

        </View>
        {/*<MapView*/}
        {/*style={{height: 300}}*/}
        {/*/>*/}
        <View>
          <Text style={{padding: 20, fontWeight: '900', fontSize: 32}}>Wants</Text>
          {this.props.store.gifts.filter(g => g.for === name).map((gift, index) => {
            return <Text key={index} style={{padding: 10}}>{gift.bought ? '✅' : ''} {gift.gift}</Text>
          })}
        </View>
      </ScrollView>
    );
  }
}


export default connect((state) => ({store: state}))(KidDetailScreen);

const styles = StyleSheet.create({
  ageContainer: {
    padding: 20
  },
  name: {
    fontSize: 32,
    fontWeight: '900'
  },
  age: {
    fontSize: 14,
    fontWeight: '100'
  }
});