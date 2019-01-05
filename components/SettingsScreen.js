import React, {Component} from 'react';
import { 
    View, 
    Text,
    ActivityIndicator,
    AsyncStorage,
    Button,
    StatusBar, 
    Image,
    TouchableOpacity, 
    TextInput, 
    StyleSheet } from 'react-native';

import { 
    createStackNavigator, 
    createSwitchNavigator, 
    createAppContainer } from 'react-navigation';

import { Icon, Container, Header, Content, Left } from 'native-base';

class SettingsScreen extends Component {
    static navigationOptions = {
        drawerLabel: 'Settings',
        drawerIcon: ({ tintColor }) => (
        <Image
            source={require('../assets/settings.png')}
            style={[styles.icon, {tintColor: tintColor}]}
        />
        )
      };
    
      render() {
        return (
            <Container>
                <Header style={{ backgroundColor: '#7a42f4' }}>
                    <Left>
                        <Icon name="ios-menu" onPress={() =>
                        this.props.navigation.openDrawer()} />
                    </Left>
                </Header>
                <Content contentContainerStyle={{
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center'
                }} >
                    <Button title="I'm done, sign me out" onPress={this._signOutAsync} />
                    <StatusBar barStyle="default" />
                </Content>
            </Container>
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
  },
  icon: {
    width: 24,
    height: 24,
  }
});