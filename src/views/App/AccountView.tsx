import React, { useContext } from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';
import { SettingsCategory } from 'components/common/SettingsCategory';
import { icons } from 'icons';
import { ThemeContext } from 'base';

const AccountView = ({ navigation }) => {
    const { background } = useContext(ThemeContext);

    return (
        <ScrollView style={{ backgroundColor: background }}>
            <View style={styles.view}>
                <SettingsCategory onPress={() => navigation.navigate('AccountSettings')} title="Persönliche Daten" text="Account-Daten überarbeiten" icon={icons.Settings1} />
                <SettingsCategory onPress={() => navigation.navigate('LearnAlgorithm')} title="Lernerfahrung" text="Lernalgorithmus überarbeiten" icon={icons.Settings2} />
                <SettingsCategory onPress={() => navigation.navigate('VisualChanges')} title="Optische Anpassungen" text="Anpassungen in der App" icon={icons.Settings4} />
                <SettingsCategory onPress={() => navigation.navigate('Modules')} title="Module" text="Anderes Modul wählen" icon={icons.Settings3} />
                <SettingsCategory onPress={() => navigation.navigate('Languages')} title="Sprachen" text="Andere Sprache wählen" icon={icons.Settings5} />
                <SettingsCategory onPress={() => navigation.navigate('Impressum')} title="Impressum" text="und AGB" icon={icons.Settings6} />
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    view: {
        padding: 14
    }
});

export { AccountView };
