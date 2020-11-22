import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Dimensions } from 'react-native';
import Logo from '../assets/img/calendar.png'


export class HomeScreen extends Component {

  render() {
    return (


      <View style={styles.container}>
        <Image source={Logo} />
        <Text style={styles.titulos}>Ask Feriados</Text>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5257F2',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulos: {
    color: "white",
    marginTop: 29.1,
    fontSize: 50,
    fontFamily: 'sans-serif-thin',
  },
});