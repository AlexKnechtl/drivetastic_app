import React, { Component, useContext } from 'react';
import { SafeAreaView, StyleSheet, TouchableOpacity, View } from 'react-native';
import { TutorialIconView } from '../../../components';
import { Tutorial_1 } from 'icons/indexHelper';
import { NavigationScreenProps } from 'react-navigation';
import { ThemeContext } from 'base';

export const Reg_Tutorial1 = ({ navigation }: NavigationScreenProps) => {
    const colors = useContext(ThemeContext);
    return (
        <SafeAreaView style={styles.view}>
            <TutorialIconView title="Einfaches Lernen" icon={Tutorial_1} text="Durch unsere geführte Lernerfahrung kannst du dich vollständig von uns Führen lassen. Wir lernen mit dir jedes Kapitel Schritt für Schritt durch bis du dir zu 100% sicher bist." />
            <View style={styles.bottomLayout}>
                <TouchableOpacity style={{ ...styles.circle, backgroundColor: colors.lightBlue}} />
                <TouchableOpacity onPress={() => navigation.navigate("tutorial2")} style={[styles.circle, {backgroundColor: colors.bgGray}]} />
                <TouchableOpacity onPress={() => navigation.navigate("tutorial3")} style={[styles.circle, {backgroundColor: colors.bgGray}]} />
            </View>
        </SafeAreaView>
    )
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
    }
});
