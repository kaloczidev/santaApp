import React from 'react';
import {Button, ScrollView, Text, TouchableOpacity } from 'react-native';
import KidListItem from '../components/kid-list-item.component';

export default class KidsListScreen extends React.Component {
  static navigationOptions = {
    title: 'Kids list',
    headerTitleStyle: {
      fontWeight: '900',
    },
  };

  constructor() {
    super();
    this.state = {
      kids: [
        {name: 'Peti', age: 5, gender: 'boy'},
        {name: 'Kata', age: 4, gender: 'girl'},
        {name: 'Béci', age: 6, gender: 'boy'},
        {name: 'Juli', age: 3, gender: 'girl'},
      ],
    }
  }

  render() {
    const {navigate} = this.props.navigation;
    return (
      <ScrollView>
        {this.state.kids.map((k, i) => (
          <TouchableOpacity key={i} onPress={() => navigate('kid', k)}>
            <KidListItem data={k}/>
          </TouchableOpacity>
        ))}
      </ScrollView>
    );
  }
}
