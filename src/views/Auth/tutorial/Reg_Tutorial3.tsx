import React, { Component, useContext } from 'react';
import { TutorialIconView, FAB } from '../../../components';
import { SafeAreaView, StyleSheet, TouchableOpacity, View } from 'react-native';
import { Tutorial_3, Continue } from 'icons/indexHelper';
import { NavigationScreenProps } from 'react-navigation';
import { ThemeContext } from 'base';

export const Reg_Tutorial3 = ({ navigation }: NavigationScreenProps) => {
    const colors = useContext(ThemeContext);
    return (
        <SafeAreaView style={styles.view}>
            <TutorialIconView title="Überall verwendbar" icon={Tutorial_3} text="Du kannst Drivetastic auf allen gängigen Plattformen nutzen, egal ob du Zuhause am Laptop oder im Zug am Smartphone bist, mit Drivetastic kannst du überall lernen." />
            <View style={styles.bottomLayout}>
                <TouchableOpacity onPress={() => navigation.navigate("tutorial1")} style={[styles.circle, {backgroundColor: colors.bgGray}]} />
                <TouchableOpacity onPress={() => navigation.navigate("tutorial2")} style={[styles.circle, {backgroundColor: colors.bgGray}]} />
                <TouchableOpacity style={{ ...styles.circle, backgroundColor: colors.lightBlue }} />
            </View>
            <FAB color="#fff" borderColor={colors.bgGray} marginLeft={4} icon={Continue} action={() => navigation.navigate("home")} />
        </SafeAreaView>
    )
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
        width: 14
    }
});
