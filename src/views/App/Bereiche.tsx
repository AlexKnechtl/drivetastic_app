import React, { Component, useState, useContext } from 'react';
import { View, StyleSheet, ScrollView, Text } from 'react-native';
import { BereichProgress, Explanation } from '../../components'
import { icons } from 'icons';
import { StateType } from 'core';
import { ModuleProgress } from 'components/specific/ModuleProgress';
import { NavigationScreenProps } from 'react-navigation';
import { connect } from 'react-redux';
import { useTranslation, Trans } from 'react-i18next';
import { ThemeContext } from 'base';

const mapStateToProps = (state: StateType) => ({
    moduleStats: state.statistics.modules
})

const mapDispatchToProps = {}
type props = NavigationScreenProps & ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps;
const enhance = connect(mapStateToProps, mapDispatchToProps);

const Bereiche = ({ moduleStats, }: props) => {
    const [t, i18n] = useTranslation();
    const modules = Object.entries(moduleStats);
    const [ProgressExplanationVisible, setProgressExplanationVisible] = useState(false);
    const colors = useContext(ThemeContext);
    const [SuccessPropabilityExplanationVisible, setSuccessPropabilityExplanationVisible] = useState(false);
    return (
        <ScrollView style={{ backgroundColor: colors.background }}>
            <View style={styles.view}>
                {/* TODO: Start */}
                {Object.entries(moduleStats).map(([id, stats]) => <ModuleProgress text1={t(id, id)} percentage={stats.statistics.progress} />)}
                {/* TODO: END TODO */}
                {modules.map(([id, { statistics, sections }]) => (
                    <>
                        <Text key={id} style={styles.bereichTitle}><Trans i18nKey={id}>{id}</Trans></Text>
                        {sections && Object.entries(sections).map(([sId, stat]) =>
                            <BereichProgress key={sId} title={t(sId, sId)} fortschritt={stat.progress} erfolgschance={stat.successPropability} color={colors.lightBlue} />
                        )}
                    </>
                ))}
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
}

const styles = StyleSheet.create({
    view: {
        padding: 14
    },
    bereichTitle: {
        fontSize: 16,
        color: '#AFAFAF',
        marginBottom: 12,
        width: "100%",
        textAlign: "center"
    }
});
const x = enhance(Bereiche);
export { x as Bereiche };
