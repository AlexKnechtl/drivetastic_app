import React, { Component } from 'react';
import { View, StyleSheet, ScrollView, Text } from 'react-native';
import { MainProgress, BereichProgress, Explanation } from '../../components'
import { icons } from 'icons';
import { colors } from 'base';
import { PulseFortschritt, PulseErfolgschance } from 'animations';

class Bereiche extends Component {
    state = {
        visibleFortschritt: false,
        visibleErfolgschance: false
    }

    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <ScrollView>
                <View style={styles.view}>
                    <MainProgress onPress={() => this.setState({ visibleFortschritt: !this.state.visibleFortschritt })} color={colors.fortschritt} title="Fortschritt" percentage={0.2} icon={icons.Fortschritt} unfilled={colors.fortschrittUnfilled} />
                    <MainProgress onPress={() => this.setState({ visibleErfolgschance: !this.state.visibleErfolgschance })} color={colors.erfolgschance} title="Erfolgschance" percentage={0.1} icon={icons.Erfolgschance} unfilled={colors.erfolgschanceUnfilled} />
                    <Text style={styles.bereichTitle}>Grundwissen</Text>
                    <BereichProgress title="1 Umgebungskunde" erfolgschance={100} color={colors.lightBlue} />
                </View>
                <Explanation
                    onPress={() => this.setState({ visibleFortschritt: !this.state.visibleFortschritt })}
                    visible={this.state.visibleFortschritt}
                    icon={icons.FortschrittWhite}
                    title="Lernfortschritt"
                    color={colors.fortschritt}
                    text1="Der Lernfortschritt zeigt dir deinen Fortschritt im Bezug auf Richtig beantwortete Fragen innerhalb eines Bereichs."
                    text2="Sobald du alle Fragen eines Bereiches einmal richtig beantwortet hast erreichst du 100%."
                    gif={PulseFortschritt} />
                <Explanation
                    onPress={() => this.setState({ visibleErfolgschance: !this.state.visibleErfolgschance })}
                    visible={this.state.visibleErfolgschance}
                    icon={icons.StrategyWhite}
                    color={colors.erfolgschance}
                    title="Erfolgschance"
                    text1="Die Erfolgschance gibt dir einen groben Überblick auf die Wahrscheinlichkeit deines Prüfungserfolges."
                    text2="Diese Kennzahl wird anhand deiner richtig beantworteten Fragen und Prüfungen berechnet."
                    gif={PulseErfolgschance} />
            </ScrollView>
        )
    }
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

export { Bereiche };
