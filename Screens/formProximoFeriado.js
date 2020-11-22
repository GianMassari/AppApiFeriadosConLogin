import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { render } from 'react-dom';
import { StyleSheet, SafeAreaView, Alert } from 'react-native';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import { Container, Header, Left, Body, Right, Title, Text, Button, Picker, Content, alert, Form, Item, Icon, Card, CardItem } from 'native-base';




class formProximoFeriado extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  render() {
    function VerFixed(props) {
      let fixed = props.fixed
      if (fixed === true) {
        return <Text>Es Fijo</Text>
      } else {
        return <Text>No es Fijo</Text>
      }
    }
    function VerGlobal(props) {
      let global = props.global
      if (global === true) {
        return <Text>Es global</Text>
      } else {
        return <Text>No es global</Text>
      }
    }
    function VerFecha(props) {
      let fecha = props.fecha
      if (fecha != null) {
        return <Text>{fecha}</Text>
      } else {
        return <Text>No hay fecha Registrada</Text>
      }
    }
    const proximoFeriado = this.props.proximoFeriado;
    let contador = 0;
    const contenido = proximoFeriado.map(element =>
      <Card key={contador++}>
        <CardItem><Body><Text>Codigo de Pais: {element.countryCode}</Text></Body></CardItem>
        <CardItem><Body><Text>Fecha: {element.date}</Text></Body></CardItem>
        <CardItem><Body><Text>Nombre Local: {element.localName}</Text></Body></CardItem>
        <CardItem><Body><Text>Nombre en ingles: {element.name}</Text></Body></CardItem>
        <CardItem><Body><Text>Fijo: </Text><VerFixed fixed={element.fixed} /></Body></CardItem>
        <CardItem><Body><Text>Global: </Text><VerGlobal global={element.global} /></Body></CardItem>
        <CardItem><Body><Text>Fecha de creacion: </Text><VerFecha fecha={element.launchYear} /></Body></CardItem>
      </Card>
    )
    return (
      <Container>
        <Content>
          <Text style={styles.titulos}>Proximos Feriados</Text>
          {contenido}
        </Content>
      </Container>

    )


  }
}

export default formProximoFeriado;


const styles = StyleSheet.create({
  titulos: {
    fontSize: 30,
    alignSelf: "center",
    fontFamily:'sans-serif-condensed',
marginTop:10,
  },
  textContent: {
    fontSize: 20,
    color: 'red',
  },
});

