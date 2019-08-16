import React, { Component } from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import { icons } from '../../icons';
import { colors } from 'base';
import { IconButton, LearnButton } from '../../components';
import { ModuleProgress } from 'components/specific/ModuleProgress';

class Home extends Component {
    constructor(props: any) {
        super(props);
    }

    render() {
        const moduleName = "Grundwissen";
        const ModulePercentage = 0.7365;
        return (
            <View style={styles.view}>
                <LearnButton />
                <View style={styles.buttonLayout}>
                    <IconButton onPress={() => this.props.navigation.navigate("TrainingView")} color={colors.lightBlue} icon={icons.Training} text="Training" />
                    <IconButton onPress={() => this.props.navigation.navigate("ExamView")} color={colors.lightPurple} icon={icons.Exam} text="Prüfung" />
                </View>
                <View style={styles.statisticsView}>
                    <View style={{ flexDirection: "row" }}>
                        <Image style={styles.statisticIcon} />
                        <View>
                            <Text style={{ ...styles.statisticText }}>Deine aktuelle</Text>
                            <Text>Lern-Statistik</Text>
                        </View>
                    </View>
                    <ModuleProgress text1={moduleName} text2={(ModulePercentage * 100).toFixed(0)} />
                    <ModuleProgress text1={moduleName} text2={(ModulePercentage * 100).toFixed(0)} />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    view: {
        flex: 1
    },
    buttonLayout: {
        flexDirection: "row",
        width: "100%",
        height: 140,
        paddingHorizontal: 13,
        paddingVertical: 12
    },
    statisticsView: {
        backgroundColor: colors.lightGreen,
        marginHorizontal: 20,
        borderRadius: 10,
        padding: 10
    },
    statisticText: {
        color: "#fff",
    },
    statisticIcon: {
        width: 10
    }
});

export { Home };
