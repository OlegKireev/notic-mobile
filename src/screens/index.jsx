import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';

import FeedScreen from './feed';
import FavoritesScreen from './favorites';
import MyNotesScreen from './my-notes';
import NoteScreen from './note';

const FeedStack = createNativeStackNavigator();
function FeedStackScreen() {
  return (
    <FeedStack.Navigator>
      <FeedStack.Screen name="Feed" component={FeedScreen} />
      <FeedStack.Screen name="Note" component={NoteScreen} />
    </FeedStack.Navigator>
  );
}

const FavoritesStack = createNativeStackNavigator();
function FavoritesStackScreen() {
  return (
    <FavoritesStack.Navigator>
      <FavoritesStack.Screen name="Favorites" component={FavoritesScreen} />
      <FavoritesStack.Screen name="Note" component={NoteScreen} />
    </FavoritesStack.Navigator>
  );
}

const MyNotesStack = createNativeStackNavigator();
function MyNotesStackScreen() {
  return (
    <MyNotesStack.Navigator>
      <MyNotesStack.Screen name="My notes" component={MyNotesScreen} />
      <MyNotesStack.Screen name="Note" component={NoteScreen} />
    </MyNotesStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#213c61',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: {
          height: 60,
          paddingBottom: 5,
        },
      }}
      >
        <Tab.Screen
          name="FeedTab"
          component={FeedStackScreen}
          options={{
            tabBarLabel: 'Feed',
            tabBarIcon: ({ color }) => <MaterialCommunityIcons name="home" size={24} color={color} />,
          }}
        />
        <Tab.Screen
          name="FavoritesTab"
          component={FavoritesStackScreen}
          options={{
            tabBarLabel: 'Favorites',
            tabBarIcon: ({ color }) => <MaterialIcons name="star" size={24} color={color} />,
          }}
        />
        <Tab.Screen
          name="MyNotesTab"
          component={MyNotesStackScreen}
          options={{
            tabBarLabel: 'My notes',
            tabBarIcon: ({ color }) => <MaterialCommunityIcons name="notebook-multiple" size={24} color={color} />,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
