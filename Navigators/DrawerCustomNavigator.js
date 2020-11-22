
import React, { Component } from "react";
import { createDrawerNavigator } from '@react-navigation/drawer';

// Screens
import { HomeScreen } from "../Screens/HomeScreen";
import { FormDatos } from "../Screens/formDatos";
import { DrawerContentScreen } from "../Screens/DrawerContentScreen";


const Drawer = createDrawerNavigator();

export class DrawerCustomNavigator extends Component {

    render() {
        return (
            <Drawer.Navigator
                initialRouteName="Home"
                headerMode={'none'}
                drawerContent={props => <DrawerContentScreen {...props} onLogout={() => this.props.onLogout()} />}
            >
                <Drawer.Screen name="Inicio" component={HomeScreen} />
                <Drawer.Screen name="Feriados" component={FormDatos} />
            </Drawer.Navigator>
        );
    }

}

