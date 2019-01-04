import React, {Component} from 'react';
import { 
    View, 
    Text,
    ActivityIndicator,
    AsyncStorage,
    Button,
    StatusBar, 
    TouchableOpacity, 
    TextInput, 
    StyleSheet } from 'react-native';

import { 
    createStackNavigator, 
    createSwitchNavigator, 
    createAppContainer } from 'react-navigation';

// import * as NativeBase from 'native-base'

class HomeScreen extends Component {
    static navigationOptions = {
        title: 'Welcome to the app!',
      };
    
      render() {
        return (
          <View style={styles.container}>
            <Button title="Show me more of the app" onPress={this._showMoreApp} />
            <Button title="Actually, sign me out :)" onPress={this._signOutAsync} />
          </View>
        );
      }

      _showMoreApp = () => {
        this.props.navigation.navigate('Other');
      };
    
      _signOutAsync = async () => {
        await AsyncStorage.clear();
        this.props.navigation.navigate('Auth');
      };
}

export default HomeScreen

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