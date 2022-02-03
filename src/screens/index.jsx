import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';

import Feed from './feed';
import Favorites from './favorites';
import MyNotes from './my-notes';
import Note from './note';

const FeedStack = createStackNavigator({
  Feed,
  Note,
});
const FavoritesStack = createStackNavigator({
  Favorites,
  Note,
});
const MyNotesStack = createStackNavigator({
  MyNotes,
  Note,
});

const TabNavigator = createBottomTabNavigator({
  FeedScreen: {
    screen: FeedStack,
    navigationOptions: {
      tabBarLabel: 'Feed',
      tabBarIcon: ({ tintColor }) => <MaterialCommunityIcons name="home" size={24} color={tintColor} />,
    },
  },
  FavoritesScreen: {
    screen: FavoritesStack,
    navigationOptions: {
      tabBarLabel: 'Favorites',
      tabBarIcon: ({ tintColor }) => <MaterialIcons name="star" size={24} color={tintColor} />,
    },
  },
  MyNotesScreen: {
    screen: MyNotesStack,
    navigationOptions: {
      tabBarLabel: 'MyNotes',
      tabBarIcon: ({ tintColor }) => <MaterialCommunityIcons name="notebook-multiple" size={24} color={tintColor} />,
    },
  },
}, {
  tabBarOptions: {
    activeTintColor: '#213c61',
    inactiveTintColor: 'gray',
    style: {
      height: 60,
      paddingBottom: 5,
    },
  },
});

export default createAppContainer(TabNavigator);
