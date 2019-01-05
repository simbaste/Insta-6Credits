import React, { Component } from 'react';
import {
  View,
  Text,
  ActivityIndicator,
  AsyncStorage,
  Button,
  StatusBar,
  TouchableOpacity,
  TextInput,
  StyleSheet
} from 'react-native';

import * as firebase from 'firebase';
import { Provider } from 'react-redux'
import { store } from '../redux/app-redux'
import ApiKeys from '../constants/ApiKeys';

class AuthLoadingScreen extends Component {
  constructor() {
    super();
    if (!firebase.apps.length) { firebase.initializeApp(ApiKeys.FirebaseConfig); }
    // firebase.auth().onAuthStateChanged(this.onAuthStateChanged);
    this._bootstrapAsync();
  }

  // Fetch the token from storage then navigate to our appropriate place
  _bootstrapAsync = async () => {
    const userToken = await AsyncStorage.getItem('userToken');

    // This will switch to the App screen or Auth screen and this loading
    // screen will be unmounted and thrown away.
    this.props.navigation.navigate(userToken ? 'App' : 'Auth');
  };

  // Render any loading content that you like here
  render() {
    return (
      <Provider store={store}>
        <View style={styles.uuthLoadingScreen}>
          <ActivityIndicator />
          <StatusBar barStyle="default" />
        </View>
      </Provider>
    );
  }
}

export default AuthLoadingScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});