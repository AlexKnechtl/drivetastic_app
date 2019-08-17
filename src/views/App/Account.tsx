import React, { Component } from 'react';
import { StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import { colors } from 'base';
import { SettingsCategory } from 'components/common/SettingsCategory';
import { icons } from 'icons';

class Account extends Component {
    state = {

    }

    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <SafeAreaView style={styles.view}>
                <ScrollView>
                    <SettingsCategory title="Persönliche Daten" text="Account-Daten überarbeiten" icon={icons.Settings1} />
                    <SettingsCategory title="Lernerfahrung" text="Lernalgorithmus überarbeiten" icon={icons.Settings2} />
                    <SettingsCategory title="Optische Anpassungen" text="Anpassungen in der App" icon={icons.Settings4} />
                    <SettingsCategory title="Module" text="Anderes Modul wählen" icon={icons.Settings3} />
                    <SettingsCategory title="Sprachen" text="Andere Sprache wählen" icon={icons.Settings5} />
                    <SettingsCategory title="Impressum" text="und AGB" icon={icons.Settings6} />
                </ScrollView>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    view: {
        flex: 1,
        paddingBottom: 25
    },
    title: {
        fontSize: 18,
        marginVertical: 12,
        color: colors.middleGray,
        width: "100%",
        textAlign: "center"
    }
});

export { Account };
