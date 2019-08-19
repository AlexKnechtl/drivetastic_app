import React, { Component } from 'react';
import { View, StyleSheet, ScrollView, Text } from 'react-native';
import { MainProgress, BereichProgress } from '../../components'
import { icons } from 'icons';
import { colors } from 'base';

class Bereiche extends Component {
    state = {

    }

    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <ScrollView>
                <View style={styles.view}>
                    <MainProgress color={colors.fortschritt} title="Fortschritt" percentage={0.2} icon={icons.Fortschritt} unfilled={colors.fortschrittUnfilled} />
                    <MainProgress color={colors.erfolgschance} title="Erfolgschance" percentage={0.1} icon={icons.Erfolgschance} unfilled={colors.erfolgschanceUnfilled} />
                    <Text style={styles.bereichTitle}>Grundwissen</Text>
                    <BereichProgress title="1 Umgebungskunde" erfolgschance={100} color={colors.lightBlue} />
                </View>
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
