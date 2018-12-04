import React from 'react';
import {Button, ScrollView, Text, TouchableOpacity } from 'react-native';
import KidListItem from '../components/kid-list-item.component';
import {connect} from 'react-redux';
import {ACTIONS} from '../redux/store';

class KidsListScreen extends React.Component {
  static navigationOptions = {
    title: 'Kids list',
    headerTitleStyle: {
      fontWeight: '900',
    },
  };

  constructor() {
    super();
    this.state = {
      kids: [],
    }
  }

  componentDidMount() {
    console.log('fasirtt',this.props);
    const kidsData = {
      kids: [
        {name: 'Peti', age: 5, gender: 'boy', list: ['car', 'ball']},
        {name: 'Kata', age: 4, gender: 'girl', list: ['doll', 'book']},
        {name: 'Béci', age: 6, gender: 'boy', list: ['red paint', 'pencils']},
        {name: 'Juli', age: 3, gender: 'girl', list: ['doll house', 'doll']},
      ],
    };

    this.setState(kidsData);

    this.props.dispatch({type: ACTIONS.UPDATE, payload: kidsData});
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

const mapStateToProps = (state) => {
  return {store: state};
};

export default connect(mapStateToProps)(KidsListScreen);