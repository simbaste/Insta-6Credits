import React, {Component} from 'react';
import { 
    View, 
    Text,
    ActivityIndicator,
    AsyncStorage,
    Button,
    Image,
    FlatList,
    Dimensions,
    TouchableWithoutFeedback,
    Animated,
    StatusBar, 
    TouchableOpacity, 
    TextInput, 
    StyleSheet } from 'react-native';

import { 
    createStackNavigator, 
    createSwitchNavigator, 
    createAppContainer } from 'react-navigation';

import { Icon, Container, Header, Content, Left, Right } from 'native-base';

import ListItem from './ListItem'

const ITEM_WIDTH = Dimensions.get('window').width

class HomeScreen extends Component {
    static navigationOptions = {
        drawerLabel: 'Home',
        drawerIcon: ({ tintColor }) => (
        <Image
            source={require('../assets/home.png')}
            style={[styles.icon, {tintColor: tintColor}]}
        />
        )
      };

      state = {
          columns: 2,
          margin: 5
      }
    
      render() {
          const {columns} = this.state
          const {margin} = this.state
        return (
            <Container>
                <Header style={{ backgroundColor: '#7a42f4' }}>
                    <Left>
                        <Icon name="ios-menu" onPress={() =>
                        this.props.navigation.openDrawer()} />
                    </Left>
                    <Right>
                        <Icon name="add" onPress={this._addPicture} />
                    </Right>
                </Header>
                <Content contentContainerStyle={{
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center'
                }} >
                    {/* <Button title="Show me more of the app" onPress={this._showMoreApp} />
                    <Button title="Actually, sign me out :)" onPress={this._signOutAsync} /> */}
                    <FlatList
                        numColumns={columns} 
                        data={[
                            require("../assets/images/image1.jpg"),
                            require("../assets/images/image2.jpg"),
                            require("../assets/images/image3.jpg"),
                            require("../assets/images/image4.jpg"),
                            require("../assets/images/image5.jpg"),
                            require("../assets/images/image6.jpg"),
                            require("../assets/images/image7.jpg"),
                            require("../assets/images/image8.jpg"),
                            require("../assets/images/image9.jpg"),
                            require("../assets/images/image10.jpg")
                        ]}
                        renderItem={({ item }) => {
                            return <ListItem 
                            itemWidth={ITEM_WIDTH/columns}
                            columns={columns}
                            margin={margin}
                            image={item}/>
                        }}
                        keyExtractor={
                            (index) => {return index} 
                        }
                    />
                </Content>
            </Container>
        //   <View style={styles.container}>
        //     <Button title="Show me more of the app" onPress={this._showMoreApp} />
        //     <Button title="Actually, sign me out :)" onPress={this._signOutAsync} />
        //   </View>
        );
      }

      _showMoreApp = () => {
        this.props.navigation.navigate('Settings');
      };
    
      _signOutAsync = async () => {
        await AsyncStorage.clear();
        this.props.navigation.navigate('Auth');
      };

      _addPicture = () => {

      }
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
  },
  icon: {
    width: 24,
    height: 24,
  }
});