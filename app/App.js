import React from 'react';
import {Provider} from 'react-redux';
import {Text} from 'react-native';

import {createBottomTabNavigator, createStackNavigator, createAppContainer} from 'react-navigation';

import KidsListScreen from './src/screens/kids-list.screen';
import GiftsScreen from './src/screens/gifts.screen';
import KidDetailScreen from './src/screens/kid-details.screen';

import store from './src/redux/store';

const KidsStack = createStackNavigator({
  list: {
    screen: KidsListScreen,
  },
  kid: {
    screen: KidDetailScreen
  }
});

const AppTabs = createBottomTabNavigator({
  kids: KidsStack,
  gifts: {
    screen: GiftsScreen
  }
}, {
  defaultNavigationOptions: ({navigation}) => ({
    tabBarIcon: () => {
      const {routeName} = navigation.state;
      return <Text>{routeName === 'kids' ? '🧒🏼' : '🎁'}</Text>;
    },
  }),
  tabBarOptions: {
    activeTintColor: 'tomato',
    inactiveTintColor: 'gray',
  },
});

const Container = createAppContainer(AppTabs);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Container/>
      </Provider>
    );
  }
}
