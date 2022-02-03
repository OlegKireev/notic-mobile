import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import Feed from './feed';
import Favorites from './favorites';
import MyNotes from './my-notes';

const TabNavigator = createBottomTabNavigator({
  FeedScreen: {
    screen: Feed,
    navigationOptions: {
      tabBarLabel: 'Feed',
    },
  },
  FavoritesScreen: {
    screen: Favorites,
    navigationOptions: {
      tabBarLabel: 'Favorites',
    },
  },
  MyNotesScreen: {
    screen: MyNotes,
    navigationOptions: {
      tabBarLabel: 'MyNotes',
    },
  },
});

export default createAppContainer(TabNavigator);
