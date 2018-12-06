import React from 'react';
import {createStackNavigator, createAppContainer, createBottomTabNavigator} from 'react-navigation';

import HomeScreen from './src/screen/home.screen';
import KidScreen from './src/screen/kid.screen';
import GiftsScreen from './src/screen/gifts.sceen';


const KidsStackNavigator = createStackNavigator({
  list: {
    screen: HomeScreen
  },
  details: {
    screen: KidScreen
  }
});

const TabNavigator = createBottomTabNavigator({
  kids: KidsStackNavigator,
  gifts: {
    screen: GiftsScreen
  }
});

const NavigationContainer = createAppContainer(TabNavigator);

export default class App extends React.Component {
  render() {
    return (
      <NavigationContainer/>
    );
  }
}
