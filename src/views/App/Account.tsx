import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
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
            <View>
                <Text style={styles.title}>Einstellungen</Text>
                <SettingsCategory title="Persönliche Daten" text="Account-Daten überarbeiten" icon={icons.Settings1} />
                <SettingsCategory title="Module" text="Andere Module wählen" icon={icons.Settings2}/>
                <SettingsCategory title="Optische Anpassung" text="Anpassungen in der App" icon={icons.Settings3}/>
                <SettingsCategory title="Sprachen" text="Andere Sprache wählen" icon={icons.Settings3}/>
                <SettingsCategory title="Impressum" text="und AGB" icon={icons.Settings4}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    view: {
        flex: 1
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
