import React, { Component, useContext } from 'react';
import { TutorialIconView } from '../../../components';
import { SafeAreaView, StyleSheet, View, TouchableOpacity } from 'react-native';
import { Tutorial_2 } from 'icons/indexHelper';
import { NavigationScreenProps } from 'react-navigation';
import { ThemeContext } from 'base';

export const Reg_Tutorial2 = ({ navigation }: NavigationScreenProps) => {
    const colors = useContext(ThemeContext);
    return (
        <SafeAreaView style={styles.view}>
            <TutorialIconView title="Schlaue Statisik" icon={Tutorial_2} text="Unsere Statistik denk für dich mit und nützt die Daten zu deinem Lernverhalten um dir das Üben zu vereinfachen und dich schneller zum Lernerfolg zu bringen." />
            <View style={styles.bottomLayout}>
                <TouchableOpacity onPress={() => navigation.navigate("tutorial1")} style={[styles.circle, {backgroundColor: colors.bgGray}]} />
                <TouchableOpacity style={{ ...styles.circle, backgroundColor: colors.lightBlue }} />
                <TouchableOpacity onPress={() => navigation.navigate("tutorial3")} style={[styles.circle, {backgroundColor: colors.bgGray}]} />
            </View>
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
