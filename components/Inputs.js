import React, { Component } from 'react'
import { 
    View, 
    Text,
    AsyncStorage,
    TouchableOpacity, 
    TextInput, 
    StyleSheet } from 'react-native'

import * as firebase from 'firebase'

import LoopAnimation from 'react-native-LoopAnimation';
// import * as constants from '../constants';

// Initialize Firebase
// var config = {
//     apiKey: "AIzaSyAEhi4ehf1tqIDFIn2SB0dTmhyY51Pjaqg",
//     authDomain: "insta6credit.firebaseapp.com",
//     databaseURL: "https://insta6credit.firebaseio.com",
//     projectId: "insta6credit",
//     storageBucket: "insta6credit.appspot.com",
//     messagingSenderId: "881293053273"
//   };

function password_validate(password) {
    var mediumRegex = new RegExp("^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{7,13})");

    return mediumRegex.test(password)
}

function email_validate(email) {
    console.log(email);
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;
    if (reg.test(email) === false) {
        console.log("Email is Not Correct");
        // alert('Email is Not Correct');
        return false;
    }
    else {
        console.log("Email is Correct");
        return true
    }
}

class Inputs extends Component {

    static navigationOptions = {
        title: 'Please sign in',
        headerStyle: { backgroundColor: '#7a42f4' }
      };    

    state = {
        email: '',
        password: ''
    }

    createUser = (email, password) => {
        try {
            firebase.auth().createUserWithEmailAndPassword(email, password).then( (user) => {
                
            })
        } catch(error) {
            console.log(error.toString())
        }
    }

    loginUser = (email, password) => {
        try {
            firebase.auth().signInWithEmailAndPassword(email, password).then( (user) => {
                // console.log(`User ==> ${user}`);
                console.log(user);                     
            })
        } catch (error) {
            console.log(error.toString());
        }
    }

    handleEmail = (text) => {
        console.log(`email ==>> ${text}`);
        
        this.setState({email:text});
    }

    handlePwd = (text) => {
        console.log(`password ==>> ${text}`);
        this.setState({ password: text });
    }
    signin = (email, pass) => {

        console.log(`Sign In with email = ${email} and password = ${pass}`);
        
        if (!email_validate(email)) {
            alert('Email is Not Correct');
        } else if (!password_validate(pass)) {
            alert('password most contain a capital letter, digit and has between 7 and 13 characters');
        } else {
            alert('You are WELCOME to the Insta6Credits App')
            this.loginUser(email, pass)
            this._signInAsync()
        }
    }
    signup = (email, pass) => {
        if (!email_validate(email)) {
            alert('Email is Not Correct');
        } else if (!password_validate(pass)) {
            alert('password most contain a capital letter, digit and has between 7 and 13 characters');
        } else {
            alert('You succesful SignUp on Insta6Credits App')
            this.createUser(email, pass)
        }
    }
    render() {

        const imgSource = {
            uri: 'http://www.menucool.com/slider/jsImgSlider/images/image-slider-2.jpg',
            width: 700,
            height: 306
          }
        return (
            <View style = {styles.container}>
                <LoopAnimation 
                    source={imgSource}
                    duration={10000}
                />
                <TextInput style = {styles.input}
                underlineColorAndroid = "transparent"
                placeholder = "Email"
                placeholderTextColor = '#ffffff'
                // placeholderTextColor = "#9a73ef"
                autoCapitalize = "none"
                onChangeText = {this.handleEmail}/>
                
                <TextInput style = {styles.input}
                underlineColorAndroid = "transparent"
                placeholder = "Password"
                placeholderTextColor = '#ffffff'
                secureTextEntry={true}
                // placeholderTextColor = "#9a73ef"

                autoCapitalize = "none"
                onChangeText = {this.handlePwd}/>
                
                <TouchableOpacity
                style = {styles.signInButton}
                onPress = {
                    () => this.signin(this.state.email, this.state.password)
                }>
                <Text style = {styles.submitButtonText}> Sign In </Text>
                </TouchableOpacity>
                <TouchableOpacity
                style = {styles.signUpButton}
                onPress = {
                    () => this.signup(this.state.email, this.state.password)
                }>
                <Text style = {styles.submitButtonText}> Sign Up </Text>
                </TouchableOpacity>
            </View>
        )
    };

    _signInAsync = async () => {
        await AsyncStorage.setItem('userToken', 'abc');
        this.props.navigation.navigate('App');
      };
}

export default Inputs

const styles = StyleSheet.create({
    container: {
       paddingTop: 23
    },
    uuthLoadingScreen: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
       margin: 10,
       padding: 10,
       borderRadius: 25,
       height: 40,
       borderColor: '#7a42f4',
       borderWidth: 1
    },
    signInButton: {
       backgroundColor: '#00b300',
       justifyContent: 'center',
       alignItems: 'center',
       borderRadius: 25,
       margin: 15,
       height: 40,
    },
    signUpButton: {
        backgroundColor: '#7a42f4',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 25,
        marginLeft: 15,
        marginRight: 15,
        height: 40,
     },
    submitButtonText:{
       color: 'white'
    }
 });