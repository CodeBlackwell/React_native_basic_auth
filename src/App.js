import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';
import firebase from 'firebase';

class App extends Component {
    componentWillMount() {
        firebase.initializeApp({
            apiKey: 'AIzaSyDRWhtCHPiOw_vo4zoQDp5jYaEEvQ11EEU',
            authDomain: 'authentication-d506b.firebaseapp.com',
            databaseURL: 'https://authentication-d506b.firebaseio.com',
            projectId: 'authentication-d506b',
            storageBucket: 'authentication-d506b.appspot.com',
            messagingSenderId: '81185605946'
        })
    }

    render () {
        return (
        <View>
            <Header headerText={ "Authentication" }/>
            <LoginForm />
        </View>
        )
    }
};

export default App