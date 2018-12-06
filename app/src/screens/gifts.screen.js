import React from 'react';
import {SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import {connect} from 'react-redux';
import {ACTIONS} from '../redux/store';

class GiftsScreen extends React.Component {
  render() {
    return (
      <SafeAreaView>
        <View>
          {this.props.store.gifts.map((gift, giftIndex) => {
            return (
              <TouchableOpacity key={giftIndex} onPress={() => {
                const newState = {...this.props.store};
                newState.gifts[giftIndex].bought = !newState.gifts[giftIndex].bought;
                this.props.dispatch({type: ACTIONS.UPDATE, payload: newState});
              }}>
                <Text style={{
                  padding: 20,
                  fontWeight: gift.bought ? '900' : '100'
                }}>
                  {gift.gift} for {gift.for} {gift.bought ? 'done' : 'todo'}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = (state) => ({store: state});

export default connect(mapStateToProps)(GiftsScreen);