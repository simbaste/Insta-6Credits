import React, { Component } from 'react';
import {
    AsyncStorage,
    Image,
    Text,
    FlatList,
    Dimensions,
    Alert,
    StyleSheet
} from 'react-native';

import { Icon, Container, Header, Content, Left, Right, View } from 'native-base';
import { ImagePicker, Permissions } from 'expo'
import firebase from 'firebase'

import ListItem from './ListItem'
import { connect } from 'react-redux'

const ITEM_WIDTH = Dimensions.get('window').width

const mapStateToProps = (state) => {
    return {
        photos: state.photos
    }
}

const MapDisPatchToProps = (dispatch) => {
    return {}
}

export class HomeScreen extends Component {
    static navigationOptions = {
        drawerLabel: 'Home',
        drawerIcon: ({ tintColor }) => (
            <Image
                source={require('../assets/home.png')}
                style={[styles.icon, { tintColor: tintColor }]}
            />
        )
    };

    getAllPhotos = () => {
        
    }

    constructor() {
        super();
        if (!firebase.apps.length) { firebase.initializeApp(ApiKeys.FirebaseConfig); }
        // firebase.auth().onAuthStateChanged(this.onAuthStateChanged);
        this.getAllPhotos();
      }

    state = {
        columns: 2,
        margin: 5,
        images: []
    }

    render() {
        const { columns } = this.state
        const { margin } = this.state
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
                    <FlatList
                        numColumns={columns}
                        data={this.state.images}
                        renderItem={({ item }) => {
                            return <ListItem
                                itemWidth={ITEM_WIDTH / columns}
                                columns={columns}
                                margin={margin}
                                image={item} />
                        }}
                        keyExtractor={
                            (index) => { return index }
                        }
                    />
                </Content>
            </Container>
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
        Alert.alert(
            'Choose photos source',
            'Choose the source of your photos between the camera and the library',
            [
                {
                    text: 'Cancel',
                    onPress: () => console.log('Cancel Pressed'),
                    style: 'cancel'
                },
                {
                    text: 'From Camera',
                    onPress: this.addFromCamera
                },
                {
                    text: 'From Library',
                    onPress: this.addFromLibrary
                }
            ]
        )
    }

    addFromLibrary = async () => {
        await this.askPermissionAsync()
        let result = await ImagePicker.launchImageLibraryAsync({
            allowsEditing: true,
            aspect: [4, 3]
        })
        console.log(result);
        if (!result.cancelled) {
            this.setState({ images:  this.state.images.concat([result.uri]) })
            this.uploadImage(result.uri)
        }
    }

    addFromCamera = async () => {
        await this.askPermissionAsync()
        let result = await ImagePicker.launchCameraAsync({
            allowsEditing: true,
            aspect: [4, 3]
        })
        console.log(result);
        if (!result.cancelled) {
            // images.push(require(result.uri))
            this.uploadImage(result.uri)
            this.setState({ images:  this.state.images.concat([result.uri]) })
        }
    }

    askPermissionAsync = async () => {
        await Permissions.askAsync(Permissions.CAMERA)
        await Permissions.askAsync(Permissions.CAMERA_ROLL)
    }

    uploadImage = async (uri) => {
        const response = await fetch(uri)
        const blob = await response.blob()

        var ref = firebase.storage().ref().child(uri)
        return ref.put(blob)
    }
}

export default HomeScreen
// export default connect(mapStateToProps, MapDisPatchToProps)(HomeScreen)

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