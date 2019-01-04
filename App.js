import React from 'react';
import Inputs from './components/Inputs'
import HomeScreen from './components/HomeScreen'
import SettingsScreen from './components/SettingsScreen'
import AuthLoadingScreen from './components/AuthLoadingScreen'
import { StyleSheet, Text, View, TouchableOpacity, TextInput, SafeAreaView } from 'react-native';
import LoopAnimation from 'react-native-LoopAnimation'

import * as ReactNavigation from 'react-navigation'

import { 
  createStackNavigator, 
  createSwitchNavigator, 
  createAppContainer } from 'react-navigation';

const AppStack = createStackNavigator({ Home: HomeScreen, Other: SettingsScreen });
const AuthStack = createStackNavigator({ SignIn: Inputs });
const MyApp = ReactNavigation.createDrawerNavigator({
  Home: {
    screen: HomeScreen
  },
  Settings: {
    screen: SettingsScreen
  }
})

export default createAppContainer(createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    App: MyApp,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'AuthLoading',
  }
));

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginView: {
    marginTop: 50
  }
});
