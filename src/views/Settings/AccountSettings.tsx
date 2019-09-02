import React, { Component } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { InputWithTitle, DismissKeyboard, FAB } from 'components';
import { NavigationScreenProps } from 'react-navigation';
import { icons } from 'icons';
import { colors } from 'base';
import { StateType, LogOutAction } from 'core';
import { connect } from 'react-redux';

const mapStateToProps = (state: StateType) => ({
    user: state.auth.data.user
})
const mapDispatchToProps = {
    dispatchLogout: LogOutAction
}
type props = NavigationScreenProps & ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps;


const AccountSettings = connect(mapStateToProps, mapDispatchToProps)(({navigation, dispatchLogout}: props) => {
    return (
        <View style={styles.view}>
            <DismissKeyboard>
                <Text style={styles.title}>Persönliche Daten</Text>
                <InputWithTitle title="Vorname" value="Alexander" />
                <InputWithTitle title="Nachname" value="Knechtl" />
                <InputWithTitle title="Passwort" value="*********" />
                <TouchableOpacity onPress={() => { dispatchLogout(); navigation.navigate("auth"); }} activeOpacity={.8} style={styles.logout}>
                    <Text style={styles.logoutText}>Logout</Text>
                </TouchableOpacity>
            </DismissKeyboard>
            <FAB action={() => { navigation.navigate("AccountView") }} rotation={180} marginRight={6} icon={icons.Continue} color={"#fff"} borderColor={colors.bgGray} />
        </View>
    )
})

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
    },
    logout: {
        alignSelf: "center",
        borderRadius: 10,
        marginTop: 12,
        paddingHorizontal: 30,
        justifyContent: "center",
        backgroundColor: colors.middleGray,
        height: 50
    },
    logoutText: {
        color: "white",
        fontSize: 20,
        fontWeight: "bold",
        width: "100%",
        textAlign: "center"
    }
});

export { AccountSettings };
