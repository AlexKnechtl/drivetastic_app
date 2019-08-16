import React, { Component } from 'react';
import { TutorialIconView, FAB } from '../../../components';
import { SafeAreaView, StyleSheet, TouchableOpacity, View } from 'react-native';
import { Tutorial_3, Continue } from 'icons/indexHelper';
import { colors } from 'base';
import { NavigationScreenProps } from 'react-navigation';

export class Reg_Tutorial3 extends Component<NavigationScreenProps> {
    render() {
        return (
            <SafeAreaView style={styles.view}>
                <TutorialIconView title="Überall verwendbar" icon={Tutorial_3} text="Du kannst Drivetastic auf allen gängigen Plattformen nutzen, egal ob du Zuhause am Laptop oder im Zug am Smartphone bist, mit Drivetastic kannst du überall lernen." />
                <View style={styles.bottomLayout}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate("tutorial1")} style={styles.circle} />
                    <TouchableOpacity onPress={() => this.props.navigation.navigate("tutorial2")} style={styles.circle} />
                    <TouchableOpacity style={{ ...styles.circle, backgroundColor: colors.lightBlue }} />
                </View>
                <FAB color="#fff" borderColor={colors.bgGray} marginLeft={4} icon={Continue} action={() => this.props.navigation.navigate("home")} />
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    view: {
        flex: 1
    },
    bottomLayout: {
        width: "100%",
        position: "absolute",
        justifyContent: "center",
        flexDirection: "row",
        alignItems: "center",
        bottom: 24
    },
    circle: {
        borderRadius: 10,
        height: 14,
        marginHorizontal: 4,
        width: 14,
        backgroundColor: colors.bgGray
    }
});
