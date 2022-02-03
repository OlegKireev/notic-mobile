import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';

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
    },
  },
  FavoritesScreen: {
    screen: FavoritesStack,
    navigationOptions: {
      tabBarLabel: 'Favorites',
    },
  },
  MyNotesScreen: {
    screen: MyNotesStack,
    navigationOptions: {
      tabBarLabel: 'MyNotes',
    },
  },
});

export default createAppContainer(TabNavigator);
