import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { InputWithTitle, DismissKeyboard } from 'components';

class AccountSettings extends Component {
    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <View style={styles.view}>
                <DismissKeyboard>
                    <Text style={styles.title}>Persönliche Daten</Text>
                    <InputWithTitle title="E-Mail" value="alex.knechtl13@gmx.at" />
                    <InputWithTitle title="Vorname" value="Alexander" />
                    <InputWithTitle title="Passwort" value="*********" />
                </DismissKeyboard>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    view: {
        flex: 1,
        padding: 14
    },
    title: {
        fontSize: 16,
        color: '#AFAFAF',
        marginBottom: 12,
        width: "100%",
        textAlign: "center"
    }
});

export { AccountSettings };
