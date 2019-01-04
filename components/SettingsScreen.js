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

class SettingsScreen extends Component {
    static navigationOptions = {
        title: 'Lots of features here',
      };
    
      render() {
        return (
          <View style={styles.container}>
            <Button title="I'm done, sign me out" onPress={this._signOutAsync} />
            <StatusBar barStyle="default" />
          </View>
        );
      }
    
      _signOutAsync = async () => {
        await AsyncStorage.clear();
        this.props.navigation.navigate('Auth');
      };
}

export default SettingsScreen

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