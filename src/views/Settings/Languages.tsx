import React, { Component, useState } from 'react';
import { View, StyleSheet, Text, Animated } from 'react-native';
import { FAB, Language } from 'components';
import { icons } from 'icons';
import { colors, LANGUAGES } from 'base';
import { NavigationScreenProps } from 'react-navigation';
import { StateType, LogOutAction } from 'core';
import { connect } from 'react-redux';
import { useTranslation, Trans } from 'react-i18next';
import { updateUserDataAction } from 'core/redux/Settings/settingsActions';

const mapStateToProps = (state: StateType) => ({
    user: state.auth.data.user,
    userData: state.settings
})
const mapDispatchToProps = {
    dispatchUpdateUserData: updateUserDataAction
}
type props = NavigationScreenProps & ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps;
const enhance = connect(mapStateToProps, mapDispatchToProps);
const Languages = enhance(({ navigation, userData, dispatchUpdateUserData }: props) => {
    return (
        <View style={styles.view}>
            <Text style={styles.title}>Sprache auswählen</Text>
            {LANGUAGES.map((l, i) => {
                const selected = l.short == userData.language;
                return <Language
                    key={i}
                    onPress={() => dispatchUpdateUserData({language: l.short})}
                    color={selected ? colors.lightBlue : colors.bgGray}
                    textColor={selected ? "#fff" : colors.darkerGray}
                    checkVisibility={selected}
                    text={l.language}
                    icon={l.image} />
            })}
            <FAB action={() => { navigation.navigate("AccountView") }} rotation={180} marginRight={6} icon={icons.Continue} color={"#fff"} borderColor={colors.bgGray} />
        </View>
    )
})


const styles = StyleSheet.create({
    view: {
        flex: 1
    },
    title: {
        fontSize: 16,
        color: '#AFAFAF',
        marginTop: 14,
        marginBottom: 9,
        width: "100%",
        textAlign: "center"
    }
});

export { Languages };
