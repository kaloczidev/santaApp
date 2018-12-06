import React from 'react';
import {
  SafeAreaView,
  Text,
  TouchableOpacity
} from 'react-native';

import KidComponent from '../components/kid.component';

export default class HomeScreen extends React.Component {

  static navigationOptions = {
    title: 'Home',
  };

  constructor() {
    super();
    this.state = {
      kids: [],
    };
  }

  componentDidMount() {
    const url = 'http://openacademy.surge.sh/kids.json';
    fetch(url)
      .then(r => r.json())
      .then(response => {
        this.setState({
          kids: response.kids
        });
      })
      .catch(e => {
        console.log('error', e);
      });
  }

  render() {
    const {navigate} = this.props.navigation;
    return (
      <SafeAreaView>
        {this.state.kids.map((e, index) => {
          return (
            <TouchableOpacity key={index} onPress={ () =>{
              console.log('👋🏻');
              navigate('details', e);
            }}>
              <KidComponent kid={e}/>
            </TouchableOpacity>
          );
        })}
        <Text>Home Screen</Text>
      </SafeAreaView>
    );
  }
}