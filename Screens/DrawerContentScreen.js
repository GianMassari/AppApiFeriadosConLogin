import React, { Component } from 'react';
import { DrawerItem, DrawerContentScrollView } from '@react-navigation/drawer';
import { View, StyleSheet } from "react-native";
import { Icon } from 'react-native-elements'

export class DrawerContentScreen extends Component {

    handlerLogout() {
        this.props.onLogout();
    }

    render() {

        return (
            <View style={styles.container}>
                <DrawerContentScrollView {...this.props}>
                    <View style={styles.topDrawer}>
                        <DrawerItem
                            icon={() => <Icon type="material-community" name="home-outline" style={styles.icon} />}
                            label="Inicio"
                            onPress={() => this.props.navigation.navigate("Inicio")}
                        />
                        <DrawerItem
                            icon={() => <Icon type="material-community" name="calendar" style={styles.icon} />}
                            label="Feriados"
                            onPress={() => this.props.navigation.navigate("Feriados")}
                        />
                    </View>
                </DrawerContentScrollView>
                <View style={styles.bottomDrawer}>
                    <DrawerItem
                        icon={() => <Icon type="material-community" name="logout" style={styles.icon} />}
                        label="Logout"
                        onPress={() => this.handlerLogout()}
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    icon: {
        color: '#517fa4',
    },
    topDrawer: {
        flex: 1
    },
    bottomDrawer: {
        flex: -1,
        justifyContent: 'flex-end',
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1,
    }
});