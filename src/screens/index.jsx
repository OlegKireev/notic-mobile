import React, { useEffect, useMemo } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import * as SecureStore from 'expo-secure-store';

import FeedScreen from './feed';
import FavoritesScreen from './favorites';
import MyNotesScreen from './my-notes';
import NoteScreen from './note';
import LogInScreen from './log-in';
import SettingsScreen from './settings';
import AuthLoadingScreen from './auth-loading';
import { routes } from '../routes';
import { AuthContext } from '../context/auth';
import { initialState, reducer } from '../store/auth';

const SettingsStack = createNativeStackNavigator();
function SettingsStackScreen() {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen name={routes.settings} component={SettingsScreen} />
    </SettingsStack.Navigator>
  );
}

const FeedStack = createNativeStackNavigator();
function FeedStackScreen() {
  return (
    <FeedStack.Navigator>
      <FeedStack.Screen name={routes.feed} component={FeedScreen} />
      <FeedStack.Screen name={routes.note} component={NoteScreen} />
    </FeedStack.Navigator>
  );
}

const FavoritesStack = createNativeStackNavigator();
function FavoritesStackScreen() {
  return (
    <FavoritesStack.Navigator>
      <FavoritesStack.Screen name={routes.favorites} component={FavoritesScreen} />
      <FavoritesStack.Screen name={routes.note} component={NoteScreen} />
    </FavoritesStack.Navigator>
  );
}

const MyNotesStack = createNativeStackNavigator();
function MyNotesStackScreen() {
  return (
    <MyNotesStack.Navigator>
      <MyNotesStack.Screen name={routes.myNotes} component={MyNotesScreen} />
      <MyNotesStack.Screen name={routes.note} component={NoteScreen} />
    </MyNotesStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();
function MainApp() {
  return (
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
      <Tab.Screen
        name="SettingsTab"
        component={SettingsStackScreen}
        options={{
          tabBarLabel: 'Settings',
          tabBarIcon: ({ color }) => <MaterialIcons name="settings" size={24} color={color} />,
        }}
      />
    </Tab.Navigator>
  );
}

const AuthStack = createNativeStackNavigator();

function App() {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  useEffect(() => {
    const bootstrapAsync = async () => {
      let userToken;
      try {
        userToken = await SecureStore.getItemAsync('userToken');
      } catch (err) {
        console.error(err);
      }
      dispatch({ type: 'RESTORE_TOKEN', token: userToken });
    };

    bootstrapAsync();
  }, []);

  const authContext = useMemo(
    () => ({
      signIn: async (token) => {
        dispatch({ type: 'LOG_IN', token });
      },
      signOut: () => dispatch({ type: 'LOG_OUT' }),
      signUp: async (data) => {
        // In a production app, we need to send user data to server and get a token
        // We will also need to handle errors if sign up failed
        // After getting token, we need to persist the token using `SecureStore`
        // In the example, we'll use a dummy token

        dispatch({ type: 'LOG_IN', token: 'dummy-auth-token' });
      },
    }),
    [],
  );

  const { isLoading, isLoggedIn } = state;

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        {isLoggedIn ? (
          <MainApp />
        ) : (
          <AuthStack.Navigator>
            {isLoading && (
              <AuthStack.Screen name={routes.authLoading} component={AuthLoadingScreen} />
            )}
            <AuthStack.Screen name={routes.login} component={LogInScreen} />
          </AuthStack.Navigator>
        )}
      </NavigationContainer>
    </AuthContext.Provider>
  );
}

export default App;
