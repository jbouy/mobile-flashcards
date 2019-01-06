import React from 'react';
import {
  createStackNavigator,
  createAppContainer,
  createBottomTabNavigator,
} from 'react-navigation';
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
import { StyleSheet } from 'react-native';
import { purple, white, shadow } from './utils/colors';

import DeckList from './components/DeckList';
import NewDeck from './components/NewDeck';
import DeckDetails from './components/DeckDetails';
import AddCard from './components/AddCard';
import Quiz from './components/Quiz';
import Results from './components/Results';

const styles = StyleSheet.create({
  tabBar: {
    height: 56,
    shadowColor: shadow,
    backgroundColor: white,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowRadius: 6,
    shadowOpacity: 1,
  },
  stackHeader: {
    backgroundColor: purple,
  },
});

const HomeTabNavigator = createBottomTabNavigator(
  {
    DeckList: {
      screen: DeckList,
      navigationOptions: {
        title: 'Decks',
        tabBarIcon: ({ tintColor }) => (
          <MaterialCommunityIcons name="cards" size={32} color={tintColor} />
        ),
      },
    },
    NewDeck: {
      screen: NewDeck,
      navigationOptions: {
        title: 'New Deck',
        tabBarIcon: ({ tintColor }) => (
          <Ionicons name="ios-add-circle" size={32} color={tintColor} />
        ),
      },
    },
  },
  {
    initialRouteName: 'DeckList',
    tabBarOptions: {
      showIcon: true,
      activeTintColor: purple,
      style: styles.tabBar,
    },
  },
);

const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: HomeTabNavigator,
      navigationOptions: {
        title: '',
      },
    },
    DeckDetails: {
      screen: DeckDetails,
    },
    AddCard: {
      screen: AddCard,
      navigationOptions: {
        title: 'Add Card',
      },
    },
    Quiz: {
      screen: Quiz,
      navigationOptions: {
        title: 'Quiz',
      },
    },
    Results: {
      screen: Results,
      navigationOptions: {
        title: 'Results',
        headerLeft: null,
      },
    },
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      headerForceInset: { top: 'never', bottom: 'never' },
      headerTintColor: white,
      headerStyle: styles.stackHeader,
    },
  },
);

export default createAppContainer(AppNavigator);
