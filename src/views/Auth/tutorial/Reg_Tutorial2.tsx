import React, { Component } from 'react';
import { TutorialIconView } from '../../../components';
import { SafeAreaView, StyleSheet, View, TouchableOpacity } from 'react-native';
import { Tutorial_2 } from 'icons/indexHelper';
import { colors } from 'base';

export class Reg_Tutorial2 extends Component {
    state = {

    }

    render() {
        return (
            <SafeAreaView style={styles.view}>
                <TutorialIconView title="Schlaue Statisik" icon={Tutorial_2} text="Unsere Statistik denk für dich mit und nützt die Daten zu deinem Lernverhalten um dir das Üben zu vereinfachen und dich schneller zum Lernerfolg zu bringen." />
                <View style={styles.bottomLayout}>
                    <TouchableOpacity onPress={()=> this.props.navigation.navigate("tutorial1")} style={styles.circle} />
                    <TouchableOpacity style={{ ...styles.circle, backgroundColor: colors.lightBlue }} />
                    <TouchableOpacity onPress={()=> this.props.navigation.navigate("tutorial3")} style={styles.circle} />
                </View>
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
