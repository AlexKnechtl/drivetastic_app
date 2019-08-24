import React, { Component } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { colors } from 'base';
import { ColoredIconHeader, IconButton, BestResult } from 'components';
import { icons } from 'icons';
import { NavigationScreenProps } from 'react-navigation';

class ExamView extends Component<NavigationScreenProps> {
    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <View style={styles.safeArea}>
                <ColoredIconHeader text="Prüfung" color={colors.lightPurple} icon={icons.Exam} />
                <Text style={styles.title}>Module</Text>
                <View style={styles.buttonLayout}>
                    <IconButton onPress={() => this.props.navigation.navigate("TrainingView")} color={colors.grundwissen} icon={icons.Grundwissen} text="Grundwissen" />
                    <IconButton onPress={() => this.props.navigation.navigate("ExamView")} color={colors.bFührerschein} icon={icons.Car} text="Bereich B" />
                </View>
                <TouchableOpacity activeOpacity={0.7} style={styles.alleBereiche} >
                    <Text style={{ color: "white", fontWeight: "bold", textAlign: "center", fontSize: 24 }}>Alle Bereiche</Text>
                    <Text style={{ color: "white", textAlign: "center", fontSize: 20 }}>Volle Prüfungssimulation</Text>
                </TouchableOpacity>
                <Text style={{ ...styles.title, marginBottom: 12 }}>Beste Ergebnisse</Text>
                <BestResult title="Grundwissen" color={colors.grundwissen} score={0.2} />
                <BestResult title="Bereich B" color={colors.bFührerschein} score={0.2} />
                <BestResult title="Alle Bereiche" color={colors.alleBereiche} score={0.2} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: "white"
    },
    buttonLayout: {
        flexDirection: "row",
        width: "100%",
        height: 140,
        paddingHorizontal: 7,
        paddingVertical: 12
    },
    title: {
        fontSize: 16,
        color: '#AFAFAF',
        marginTop: 16,
        marginBottom: 4,
        width: "100%",
        textAlign: "center"
    },
    alleBereiche: {
        height: 100,
        justifyContent: "center",
        marginHorizontal: 14,
        borderRadius: 10,
        backgroundColor: colors.alleBereiche
    }
});

export { ExamView };
