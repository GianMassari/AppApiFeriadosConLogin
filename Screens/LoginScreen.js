
import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, Image, TouchableOpacity } from 'react-native';
import Logo from '../assets/img/calendar.png'
import * as Google from 'expo-google-app-auth'

export default class LoginScreen extends Component {

    async _signInWithGoogle() {

        try {
            const result = await Google.logInAsync({
                androidClientId: "543583500329-l1tk0rhdp8q0a5gk9b0svou0lcpu7vk5.apps.googleusercontent.com",
                scopes: ['profile', 'email'],
            });

            if (result.type === 'success') {
                try {
                    this.props.onLogin();
                } catch (error) {
                    console.log("Something happened " + error);
                }
            } else {
                return { cancelled: true };
            }

        } catch (e) {
            return { error: true };
        }

    }

    render() {
        return (

            <View style={styles.container}>
                <Text style={styles.titulos}>Bienvenido</Text>
                <Image source={Logo} style={styles.imagenLogo} />
                <TouchableOpacity onPress={() => this._signInWithGoogle()} style={[styles.buttonContainer, styles.loginButton]}>
                    <Text style={styles.loginText}>Iniciar sesión con Google</Text>
                </TouchableOpacity>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
    },
    imagenLogo: {
        marginBottom: 100,
    },
    titulos: {
        fontSize: 50,
        marginBottom: 120,
        color: 'black',
        fontFamily: 'sans-serif-thin',
        
    },
    buttonContainer: {
        height: 45,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        width: 250,
        borderRadius: 30,
    },
    loginButton: {
        backgroundColor: '#00c3ff',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,

        elevation: 3,
    },
    loginText: {
        color: 'black',
        fontSize: 17,
        fontFamily: 'sans-serif-light',
    },
});

