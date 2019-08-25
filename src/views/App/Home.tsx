import React, { Component } from 'react';
import { View, StyleSheet, Text, ScrollView, TouchableOpacity, ImageBackground } from 'react-native';
import { icons } from '../../icons';
import { colors } from 'base';
import { IconButton, LearnButton } from '../../components';
import { ModuleProgress } from 'components/specific/ModuleProgress';
import { NavigationScreenProps } from 'react-navigation';

class Home extends Component<NavigationScreenProps> {
    constructor(props: any) {
        super(props);
    }

    render() {
        const moduleName = "Grundwissen";
        const ModulePercentage = 0.7365;
        return (
            <ScrollView>
                <View style={styles.view}>
                    <LearnButton onPress={() => this.props.navigation.navigate("Question")} />
                    <View style={styles.buttonLayout}>
                        <IconButton onPress={() => this.props.navigation.navigate("TrainingView")} color={colors.lightBlue} icon={icons.Training} text="Training" />
                        <IconButton onPress={() => this.props.navigation.navigate("ExamView")} color={colors.lightPurple} icon={icons.Exam} text="Prüfung" />
                    </View>
                    <View style={styles.statisticsView}>
                        <View style={{ flexDirection: "row", marginBottom: 8, paddingLeft: 12 }}>
                            <ImageBackground source={icons.Statistic} style={{ aspectRatio: 1, marginVertical: 7 }} />
                            <View style={{ marginLeft: 12 }}>
                                <Text style={{ ...styles.statisticText, fontSize: 20, fontWeight: "bold" }}>Deine aktuelle</Text>
                                <Text style={{ ...styles.statisticText, fontSize: 30 }}>Lern-Statistik</Text>
                            </View>
                        </View>
                        <ModuleProgress text1={moduleName} percentage={ModulePercentage} />
                        <ModuleProgress text1={moduleName} percentage={ModulePercentage} />
                        <TouchableOpacity onPress={() => this.props.navigation.navigate("Statistics")} style={styles.button}>
                            <Text style={styles.buttonText}>Mehr erfahren</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    view: {
        paddingVertical: 14
    },
    buttonLayout: {
        flexDirection: "row",
        width: "100%",
        height: 140,
        paddingHorizontal: 7,
        paddingVertical: 12
    },
    statisticsView: {
        flex: 0,
        backgroundColor: colors.lightGreen,
        marginHorizontal: 14,
        borderRadius: 10,
        padding: 12
    },
    statisticText: {
        color: "#fff",
    },
    statisticIcon: {
        width: 52,
        aspectRatio: 1,
        marginHorizontal: 12
    },
    button: {
        backgroundColor: "#fff",
        paddingVertical: 8,
        paddingHorizontal: 18,
        marginVertical: 8,
        alignSelf: "center",
        borderRadius: 8
    },
    buttonText: {
        color: colors.lightGreen,
        fontSize: 16,
        fontWeight: "bold"
    }
});

export { Home };
