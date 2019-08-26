import React, { Component } from 'react';
import { View, StyleSheet, Text, ScrollView, TouchableOpacity, ImageBackground } from 'react-native';
import { icons } from '../../icons';
import { colors } from 'base';
import { IconButton, LearnButton } from '../../components';
import { ModuleProgress } from 'components/specific/ModuleProgress';
import { NavigationScreenProps } from 'react-navigation';
import { Trans, useTranslation } from 'react-i18next';

const Home = ({navigation}: NavigationScreenProps) => {
        const moduleName = "Grundwissen";
        const ModulePercentage = 0.7365;
        const [t, i18n] = useTranslation();
        return (
            <ScrollView>
                <View style={styles.view}>
                    <LearnButton />
                    <View style={styles.buttonLayout}>
                        <IconButton onPress={() => navigation.navigate("TrainingView")} color={colors.lightBlue} icon={icons.Training} text={t("Training")} />
                        <IconButton onPress={() => navigation.navigate("ExamView")} color={colors.lightPurple} icon={icons.Exam} text={t("exam")} />
                    </View>
                    <View style={styles.statisticsView}>
                        <View style={{ flexDirection: "row", marginBottom: 8, paddingLeft: 12 }}>
                            <ImageBackground source={icons.Statistic} style={{ aspectRatio: 1, marginVertical: 7 }} />
                            <View style={{ marginLeft: 12 }}>
                                <Text style={{ ...styles.statisticText, fontSize: 20, fontWeight: "bold" }}><Trans>Deine aktuelle</Trans></Text>
                                <Text style={{ ...styles.statisticText, fontSize: 30 }}><Trans>Lern-Statistik</Trans></Text>
                            </View>
                        </View>
                        <ModuleProgress text1={moduleName} percentage={ModulePercentage} />
                        <ModuleProgress text1={moduleName} percentage={ModulePercentage} />
                        <TouchableOpacity onPress={() => navigation.navigate("Statistics")} style={styles.button}>
                            <Text style={styles.buttonText}><Trans i18nKey="moreInfos">Mehr erfahren</Trans></Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        )
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
