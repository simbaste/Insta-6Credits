import React from 'react';
import Inputs from './components/Inputs'
import HomeScreen from './components/HomeScreen'
import SettingsScreen from './components/SettingsScreen'
import AuthLoadingScreen from './components/AuthLoadingScreen'
import { 
  StyleSheet,
  Image, 
  Text, 
  View, 
  TouchableOpacity, 
  TextInput, 
  SafeAreaView } from 'react-native';

import { createDrawerNavigator } from 'react-navigation'

import { 
  createStackNavigator, 
  createSwitchNavigator, 
  createAppContainer,
  DrawerItems } from 'react-navigation';
import { Container, Body, Header, Content } from 'native-base';

const CustomDrawerContentComponent = (props) => (
  <Container>
    <Header style={{ height: 200, backgroundColor: '#7a42f4' }}>
      <Body>
        <Image
        style={styles.drawerImage}
        source={require("./assets/insta.png")} />
      </Body>
    </Header>
    <Content>
      <DrawerItems {...props} />
    </Content>
  </Container>
)

const AppStack = createStackNavigator({ Home: HomeScreen, Other: SettingsScreen });
const AuthStack = createStackNavigator({ SignIn: Inputs });
const MyApp = createDrawerNavigator({
  Home: {
    screen: HomeScreen
  },
  Settings: {
    screen: SettingsScreen
  }
}, {
  initialRouteName: 'Home',
  contentComponent: CustomDrawerContentComponent,
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
  },
  drawerImage: {
    height: 150,
    width: 150,
    borderRadius: 75
  }
});
