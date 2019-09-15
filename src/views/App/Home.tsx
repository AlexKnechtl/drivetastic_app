import React, { Component, useState, useContext } from 'react';
import { View, StyleSheet, Text, ScrollView, TouchableOpacity, ImageBackground, StatusBar } from 'react-native';
import { icons } from '../../icons';
import { IconButton, LearnButton, Explanation, MainProgress } from '../../components';
import { ModuleProgress } from 'components/specific/ModuleProgress';
import { NavigationScreenProps } from 'react-navigation';
import { Trans, useTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { StateType, StorageFactory } from 'core';
import { ThemeContext } from 'base';

const mapStateToProps = (state: StateType) => ({
    moduleStats: state.statistics.modules
})

const mapDispatchToProps = {}
type props = NavigationScreenProps & ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps;
const enhance = connect(mapStateToProps, mapDispatchToProps);

const Home = enhance(({ navigation, moduleStats }: props) => {
    const [t, i18n] = useTranslation();
    const colors = useContext(ThemeContext);
    const [ProgressExplanationVisible, setProgressExplanationVisible] = useState(false);
    const [SuccessPropabilityExplanationVisible, setSuccessPropabilityExplanationVisible] = useState(false);
    return (
        <ScrollView style={{ backgroundColor: colors.background }}>
            <StatusBar barStyle="dark-content" />
            <View style={styles.view}>
                <LearnButton onPress={() => navigation.navigate("QuestionView")} />
                <View style={styles.buttonLayout}>
                    <IconButton onPress={() => navigation.navigate("TrainingView")} color={colors.lightBlue} icon={icons.Training} text={t("training", { defaultValue: "Training" })} />
                    <IconButton onPress={() => navigation.navigate("ExamView")} color={colors.lightPurple} icon={icons.Exam} text={t("exam", { defaultValue: "Prüfung" })} />
                </View>
                <View style={[styles.statisticsView, { backgroundColor: colors.lightGreen }]}>
                    <View style={{ flexDirection: "row", marginBottom: 8, paddingLeft: 12 }}>
                        <ImageBackground source={icons.Statistic} style={{ aspectRatio: 1, marginVertical: 7 }} />
                        <View style={{ marginLeft: 12 }}>
                            <Text style={{ ...styles.statisticText, fontSize: 20, fontWeight: "bold" }}><Trans>Deine aktuelle</Trans></Text>
                            <Text style={{ ...styles.statisticText, fontSize: 30 }}><Trans>Lern-Statistik</Trans></Text>
                        </View>
                    </View>
                    <MainProgress onPress={() => setProgressExplanationVisible(!ProgressExplanationVisible)} color={'#fff'} title="Fortschritt" percentage={0.2} icon={icons.FortschrittWhite} unfilled={colors.fortschrittUnfilled} />
                    <MainProgress onPress={() => setSuccessPropabilityExplanationVisible(!SuccessPropabilityExplanationVisible)} color={'#fff'} title="Erfolgschance" percentage={0.1} icon={icons.ErfolgschanceWhite} unfilled={colors.erfolgschanceUnfilled} />
                    <TouchableOpacity onPress={() => navigation.navigate("Statistics")} style={styles.button}>
                        <Text style={[styles.buttonText, { color: colors.lightGreen }]}><Trans i18nKey="moreInfos">Mehr erfahren</Trans></Text>
                    </TouchableOpacity>
                </View>
            </View>
            <Explanation onPress={() => setProgressExplanationVisible(!ProgressExplanationVisible)} visible={ProgressExplanationVisible}
                icon={icons.FortschrittWhite} color={colors.fortschritt}
                title="Lernfortschritt"
                text1="Der Lernfortschritt zeigt dir deinen Fortschritt im Bezug auf Richtig beantwortete Fragen innerhalb eines Bereichs."
                text2="Sobald du alle Fragen eines Bereiches einmal richtig beantwortet hast erreichst du 100%." />
            <Explanation onPress={() => setSuccessPropabilityExplanationVisible(!SuccessPropabilityExplanationVisible)} visible={SuccessPropabilityExplanationVisible}
                icon={icons.StrategyWhite} color={colors.erfolgschance}
                title="Erfolgschance"
                text1="Die Erfolgschance gibt dir einen groben Überblick auf die Wahrscheinlichkeit deines Prüfungserfolges."
                text2="Diese Kennzahl wird anhand deiner richtig beantworteten Fragen und Prüfungen berechnet." />
        </ScrollView>
    )
})

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
        fontSize: 16,
        fontWeight: "bold"
    }
});

export { Home };
