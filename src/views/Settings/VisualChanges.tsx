import React, { Component, useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SwitchView, FAB } from 'components';
import { NavigationScreenProps } from 'react-navigation';
import { icons } from 'icons';
import { StateType, LogOutAction } from 'core';
import { connect } from 'react-redux';
import { useTranslation, Trans } from 'react-i18next';
import { updateUserDataAction } from 'core/redux/Settings/settingsActions';
import { ThemeContext } from 'base';

const mapStateToProps = (state: StateType) => ({
    user: state.auth.data.user,
    userData: state.settings
})
const mapDispatchToProps = {
    dispatchUpdateUserData: updateUserDataAction
}
type props = NavigationScreenProps & ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps;
const enhance = connect(mapStateToProps, mapDispatchToProps);
const VisualChanges = enhance(({ navigation, userData, dispatchUpdateUserData }: props) => {
    const [t] = useTranslation();
    const colors = useContext(ThemeContext);
    return (
        <View style={styles.view}>
            <Text style={styles.title}><Trans i18nKey="visualTweaks">Optische Anpassungen</Trans></Text>
            <SwitchView onChange={(c: boolean)=> dispatchUpdateUserData({darkMode: c}) } switched={!!userData.darkMode} textColor={colors.darkerGray} bgColor={colors.bgGray} title={t("Dunkler Modus","Dunkler Modus")} />
            <SwitchView onChange={(c: boolean)=> dispatchUpdateUserData({DeuteranopieMode: c}) } switched={!!userData.DeuteranopieMode} textColor={colors.darkerGray} bgColor={colors.bgGray} title={t("Deuteranopie Modus", "Deuteranopie Modus")} />
            <SwitchView onChange={(c: boolean)=> dispatchUpdateUserData({ProtonapieMode: c}) } switched={!!userData.ProtonapieMode} textColor={colors.darkerGray} bgColor={colors.bgGray} title={t("Protonapie Modus","Protonapie Modus")} />
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
    }
});

export { VisualChanges };
