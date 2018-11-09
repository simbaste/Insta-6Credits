import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native'
import * as firebase from 'firebase'

// Initialize Firebase
var config = {
    apiKey: "AIzaSyAEhi4ehf1tqIDFIn2SB0dTmhyY51Pjaqg",
    authDomain: "insta6credit.firebaseapp.com",
    databaseURL: "https://insta6credit.firebaseio.com",
    projectId: "insta6credit",
    storageBucket: "insta6credit.appspot.com",
    messagingSenderId: "881293053273"
  };

function password_validate(password) {
    var mediumRegex = new RegExp("^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})");
    var re = {
        'capital' : /[A-Z]/,
        'digit'   : /[0-9]/,
        'full'    : /[A-Za-z0-9]{7,13}$/
    };
    // return re.capital.test(password) && 
    //        re.digit.test(password) && 
    //        re.full.test(password);
    return mediumRegex.test(password);
}

function email_validate(email) {
    console.log(email);
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;
    if (reg.test(email) === false) {
        // console.log("Email is Not Correct");
        // alert('Email is Not Correct');
        return false;
    }
    else {
        console.log("Email is Correct");
        return true
    }
}

class Inputs extends Component {
    state = {
        email: '',
        pwd: ''
    }
    handleEmail = (text) => {
        this.setState({email:text});
    }

    handlePwd = (text) => {
        this.setState({ pwd: text });
    }
    login = (email, pass) => {
        if (!email_validate(email)) {
            alert('Email is Not Correct');
        } else if (!password_validate(pass)) {
            alert('password most contain a capital letter, digit and has between 7 and 13 characters');
        } else {
            alert('email: ' + email + ' password: ' + pass)
        }
    }
    render() {
        if (!firebase.apps.length) {
            firebase.initializeApp(config)
        }
        return (
            <View style = {styles.container}>
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
                // placeholderTextColor = "#9a73ef"

                autoCapitalize = "none"
                onChangeText = {this.handlePassword}/>
                
                <TouchableOpacity
                style = {styles.submitButton}
                onPress = {
                    () => this.login(this.state.email, this.state.password)
                }>
                <Text style = {styles.submitButtonText}> Submit </Text>
                </TouchableOpacity>
            </View>
        )
    }
}
export default Inputs

const styles = StyleSheet.create({
    container: {
       paddingTop: 23
    },
    input: {
       margin: 10,
       padding: 10,
       borderRadius: 25,
       height: 40,
       borderColor: '#7a42f4',
       borderWidth: 1
    },
    submitButton: {
       backgroundColor: '#7a42f4',
       justifyContent: 'center',
       alignItems: 'center',
       borderRadius: 25,
       margin: 15,
       height: 40,
    },
    submitButtonText:{
       color: 'white'
    }
 })