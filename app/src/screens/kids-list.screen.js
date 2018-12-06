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
    fetch('http://openacademy.surge.sh/kids.json')
      .then(r =>r.json())
      .then(kids => {
        this.setState(kids);

        let gifts = [];
        kids.kids.forEach (kid => {
          gifts = [...gifts,...kid.list.map( g => ({ for: kid.name, gift: g, bought: false }))];
        });
        this.props.dispatch({type: ACTIONS.UPDATE, payload: {gifts: gifts}});


      }).catch(e=> console.log(e));
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