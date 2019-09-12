import React, { Component, useContext } from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import { NavigationScreenProps } from 'react-navigation';
import { FAB, Logo, LearnSpeedBtn } from 'components';
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

const LearnAlgorithm = enhance(({navigation, userData, dispatchUpdateUserData}:props)=> {
        const selected = {
            slow: userData.studyVelocity == 4,
            middle: userData.studyVelocity == 3,
            fast: userData.studyVelocity == 2
        };
        const colors = useContext(ThemeContext);
        const [t,i18n] = useTranslation();
        return (
            <View style={styles.view}>
                <Text style={{...styles.title, color: colors.settingsGray} }><Trans i18nKey="customizeLearningExperience">Lernerfahrung anpassen</Trans></Text>
                <View style={{...styles.header, borderColor: colors.lightBlue}}>
                    <Image style={styles.headerIcon} resizeMode="contain" source={icons.Easy_Learn} />
                    <View>
                        <Logo fontSize={18} paddingHorizontal={6} paddingVertical={2} />
                        <Text>
                            <Text style={{ color: colors.lightBlue, fontSize: 22, fontWeight: "bold" }}>Easy</Text>
                            <Text style={{ color: colors.lightBlue, fontSize: 22 }}>Learn</Text>
                        </Text>
                    </View>
                </View>
                <Text style={{ ...styles.title, fontSize: 18, color: colors.darkerGray, marginVertical: 12 }}><Trans i18nKey="yourLearningVelocity">Deine Lerngeschwindigkeit</Trans></Text>
                <View style={{ flexDirection: "row" }}>
                        <LearnSpeedBtn
                            onPress={() => dispatchUpdateUserData({studyVelocity: 4})}
                            selected={selected.slow}
                            icon={selected.slow ? icons.SnailWhite : icons.Snail} text={t("Langsam","Langsam")} />
                        <LearnSpeedBtn
                            onPress={() => dispatchUpdateUserData({studyVelocity: 3})}
                            selected={selected.middle}
                            icon={selected.middle ? icons.DogWhite : icons.Dog} text={t("Normal","Normal")} />
                        <LearnSpeedBtn
                            onPress={() => dispatchUpdateUserData({studyVelocity: 2})}
                            selected={selected.fast}
                            icon={selected.fast ? icons.CheetahWhite : icons.Cheetah} text={t("Schnell","Schnell")} />
                    </View>
                    <View style={{...styles.InfoView, borderColor: colors.middleGray}}>
                        <Image style={{ width: 18, height: 18, marginRight: 8 }} source={icons.Info} />
                        <Text style={{ fontSize: 14, color: colors.darkerGray, width: "90%" }}><Trans i18nKey="learningVelocityDescription">Die Lerngeschwindigkeit bestimmt wie oft du Fragen zur Einprägung wiederholt bekommst.</Trans></Text>
                    </View>
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
        marginBottom: 12,
        width: "100%",
        textAlign: "center"
    },
    header: {
        borderRadius: 10,
        alignSelf: "center",
        flexDirection: "row",
        borderWidth: 2,
        paddingHorizontal: 12,
        paddingVertical: 8
    },
    headerIcon: {
        width: 48,
        height: 48,
        marginRight: 12
    },
    InfoView: {
        alignSelf: "center",
        maxWidth: "80%",
        borderWidth: 2,
        borderRadius: 8,
        alignItems: "center",
        flexDirection: "row",
        paddingVertical: 4,
        paddingHorizontal: 8,
        marginTop: 12
    }
});

export { LearnAlgorithm };
