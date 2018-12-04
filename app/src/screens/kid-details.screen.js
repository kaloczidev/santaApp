import React from 'react';
import {Text, View, StyleSheet, Image, Dimensions} from 'react-native';
import {MapView} from 'expo';

export default class KidDetailScreen extends React.Component {
  static navigationOptions = ({navigation}) => {
    return {
      title: navigation.getParam('name'),
      headerTitleStyle: {
        fontWeight: '900',
      },
      headerTintColor: '#000'
    };
  };

  constructor(props) {
    super(props);
    this.state = {
      img: 'https://source.unsplash.com/featured/?girl,kid,face',
    }
  }

  componentDidMount() {
    const {gender} = this.props.navigation.state.params;
    this.setState({
      img: `https://source.unsplash.com/featured/?${gender},kid,face`
    })
  }

  render() {
    const {name, age} = this.props.navigation.state.params;
    const dim = Dimensions.get('screen').width;
    return (
      <View style={{
        flex: 1
      }}>
        <Image
          style={{width: dim, height: dim}}
          source={{uri: this.state.img}}
        />
        <View style={styles.ageContainer}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.age}>age: {age} </Text>
        </View>
        <MapView
          style={{height: 300}}
        />
      </View>
    );
  }
}

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