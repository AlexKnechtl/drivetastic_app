import React, { Component, useState } from 'react';
import { View, StyleSheet, ScrollView, Text } from 'react-native';
import { MainProgress, BereichProgress, Explanation } from '../../components'
import { icons } from 'icons';
import { colors } from 'base';
import { StateType } from 'core';
import { NavigationScreenProps } from 'react-navigation';
import { connect } from 'react-redux';
import { useTranslation, Trans } from 'react-i18next';


const mapStateToProps = (state: StateType) => ({
    moduleStats: state.statistics.modules
})

const mapDispatchToProps = {
}
type props = NavigationScreenProps & ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps;
const enhance = connect(mapStateToProps, mapDispatchToProps);

const Bereiche = ({moduleStats,}:props) => {
    const [t, i18n] = useTranslation();
    const modules = Object.entries(moduleStats);
    const [ProgressExplanationVisible, setProgressExplanationVisible] = useState(false);
    const [SuccessPropabilityExplanationVisible, setSuccessPropabilityExplanationVisible] = useState(false);
    return (
        <ScrollView>
            <View style={styles.view}>
                {/* TODO: Start */}
                <MainProgress onPress={() => setProgressExplanationVisible(!ProgressExplanationVisible)} color={colors.fortschritt} title="Fortschritt" percentage={0.2} icon={icons.Fortschritt} unfilled={colors.fortschrittUnfilled} />
                <MainProgress onPress={() => setSuccessPropabilityExplanationVisible(!SuccessPropabilityExplanationVisible)} color={colors.erfolgschance} title="Erfolgschance" percentage={0.1} icon={icons.Erfolgschance} unfilled={colors.erfolgschanceUnfilled} />
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
