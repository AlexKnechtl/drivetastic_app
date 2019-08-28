import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { colors } from 'base';
import { ColoredIconHeader, IconButton, BestResult, LongIconButton, ModuleProgress } from 'components';
import { icons } from 'icons';
import { NavigationScreenProps, ScrollView } from 'react-navigation';
import { TouchableOpacity } from 'react-native-gesture-handler';

class ExamView extends Component<NavigationScreenProps> {
    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <ScrollView style={styles.safeArea}>
                <ColoredIconHeader text="Prüfung" color={colors.lightPurple} icon={icons.Exam} />
                <Text style={styles.title}>Module</Text>
                <View style={{ marginHorizontal: 14 }}>
                    <LongIconButton title="Alle Bereiche" text="Volle Prüfungssimulation" bgColor={colors.lightPurple} icon={icons.Test} />
                </View>
                <View style={styles.buttonLayout}>
                    <IconButton onPress={() => this.props.navigation.navigate("TrainingView")} color={colors.grundwissen} icon={icons.Grundwissen} text="Grundwissen" />
                    <IconButton onPress={() => this.props.navigation.navigate("ExamView")} color={colors.bFührerschein} icon={icons.Car} text="Bereich B" />
                </View>
                <Text style={styles.title}>Beste Ergebnisse</Text>
                <BestResult title="Grundwissen" color={colors.grundwissen} score={0.2} />
                <BestResult title="Bereich B" color={colors.bFührerschein} score={0.2} />
                <View style={styles.historyView}>
                    <Text style={{ color: "white", textAlign: "center", fontSize: 18, marginBottom: 14 }}>Prüfungshistorie</Text>
                    <ModuleProgress text1="Grundwissen" percentage={0.5} />
                    <ModuleProgress text1="B Bereich" percentage={0.2} />
                    <TouchableOpacity onPress={() => this.props.navigation.navigate("Statistics")} style={styles.button}>
                        <Text style={styles.buttonText}>Mehr erfahren</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
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
        height: 95,
        paddingHorizontal: 7
    },
    title: {
        fontSize: 16,
        color: '#AFAFAF',
        marginTop: 14,
        marginBottom: 14,
        width: "100%",
        textAlign: "center"
    },
    alleBereiche: {
        height: 100,
        justifyContent: "center",
        marginHorizontal: 14,
        borderRadius: 10,
        backgroundColor: colors.alleBereiche
    },
    button: {
        backgroundColor: "#fff",
        paddingVertical: 8,
        paddingHorizontal: 18,
        marginTop: 8,
        alignSelf: "center",
        borderRadius: 8
    },
    buttonText: {
        color: colors.lightPurple,
        fontSize: 16,
        fontWeight: "bold"
    },
    historyView: {
        backgroundColor: '#787DAE',
        padding: 14,
        marginTop: 20,
        marginHorizontal: 14,
        marginBottom: 20,
        borderRadius: 10
    }
});

export { ExamView };
