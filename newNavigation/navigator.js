import React from 'react'
import { Button} from 'react-native';
import HomeScreen from '../screens/HomeScreen';
// import AddCard from '../screens/AddCard';
// import SettingsScreen from '../screens/SettingsScreen';
// import DeckMain from '../screens/DeckMain;'

// import Decks from '../screens/Decks';
import NewDeck from '../screens/NewDeck';
import DeckMain from '../screens/DeckMain';
import AddCard from '../screens/AddCard';
import Quiz from '../screens/Quiz';

import {purple,
gray,
white,
red,
orange,
blue,
lightPurp,
lightOrange,
pink,
black} from '../utils/colours';
import { FontAwesome, Ionicons } from '@expo/vector-icons';

import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';



const Tabs = createBottomTabNavigator({
    Decks: {
      screen: HomeScreen,
      navigationOptions: {
        tabBarLabel: 'DECKS',
        tabBarIcon: ({ tintColor }) => (<Ionicons name='ios-bookmarks' size={20} color={tintColor} />)
      }
    },
    NewDeck: {
      screen: NewDeck,
      navigationOptions: {
        tabBarLabel: 'NEW DECK',
        tabBarIcon: ({ tintColor }) => (<FontAwesome name='plus-square' size={20} color={tintColor} />)
      }
    }
  }, {
    initialRouteName: 'Decks',
    backBehavior: 'Decks',
  },{
    tabBarOptions: {
      activeTintColor: purple,
      style: {
        height: 56,
        backgroundColor: white,
      }
    }
  })
  
 const SubNavigator = createStackNavigator({
    DeckMain: {
      screen: DeckMain,
      navigationOptions: {
        headerTintColor: white,
        headerStyle: {
          backgroundColor: purple,
        }
      }
    },
    AddCard: {
      screen: AddCard,
      navigationOptions: {
        title: 'Add Card',
        headerTintColor: white,
        headerStyle: {
          backgroundColor: purple,
        },
      }
    },
    Quiz: {
      screen: Quiz,
      navigationOptions: {
        title: 'Quiz',
        headerTintColor: white,
        headerStyle: {
          backgroundColor: purple,
        },
      }
    },
  });

  export default SubNavigator;