import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { render } from 'react-dom';
import { StyleSheet, SafeAreaView, View, Alert, ScrollView } from 'react-native';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import { Container, Header, Left, Body, Right, Title, Text, Button, Picker, Content, alert, Card, CardItem, Root } from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import {DrawerCustomNavigator} from './Navigators/DrawerCustomNavigator';

//COMPONENTES//
import Login from "./Screens/LoginScreen";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false,
      logueado: false,
    };
  }

  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font,
    });
    this.setState({ isReady: true });

  }

  setStateLogin() {
    this.setState({ logueado: true });
  }

  setStateLogout() {
    this.setState({ logueado: false });
  }

  render() {
    if (!this.state.isReady) {
      return <AppLoading />;
    }

    if (!this.state.logueado) {
      return (
        <Login onLogin={() => this.setStateLogin()}/>
      )
    } else {
      return (
        <NavigationContainer>   
      <DrawerCustomNavigator onLogout={() => this.setStateLogout()}/>
        </NavigationContainer> 
     );
  }

  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo: {
    fontSize: 30,

  },
});

