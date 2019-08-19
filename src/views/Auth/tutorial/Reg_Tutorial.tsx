import React, { Component } from 'react';
import { SafeAreaView, StyleSheet, TouchableOpacity, View } from 'react-native';
import { TutorialIconView } from '../../../components';
import { Tutorial_1 } from 'icons/indexHelper';
import { colors } from 'base';

export class Reg_Tutorial1 extends Component {
    render() {
        return (
            <SafeAreaView style={styles.view}>
                <TutorialIconView title="Einfaches Lernen" icon={Tutorial_1} text="Durch unsere geführte Lernerfahrung kannst du dich vollständig von uns Führen lassen. Wir lernen mit dir jedes Kapitel Schritt für Schritt durch bis du dir zu 100% sicher bist." />
                <View style={styles.bottomLayout}>
                    <TouchableOpacity style={{ ...styles.circle, backgroundColor: colors.lightBlue }} />
                    <TouchableOpacity onPress={() => this.props.navigation.navigate("tutorial2")} style={styles.circle} />
                    <TouchableOpacity onPress={() => this.props.navigation.navigate("tutorial3")} style={styles.circle} />
                </View>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    view: {
        flex: 1,
        backgroundColor: "white"
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
