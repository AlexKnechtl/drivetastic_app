import React, { Component } from 'react';
import { StyleSheet, SafeAreaView, Text } from 'react-native';

import { IconHeadline, GreyTextInput, TextInputContainer, FAB } from 'components/common';
import { colors, fonts } from 'base';
import { icons } from '../../icons';
import { connect } from 'react-redux';
import { StateType, SendPasswordResetEmailAction } from 'core';
import { NavigationScreenProps } from 'react-navigation';

const mapStateToProps = (state: StateType) => ({
    success: state.auth.passwordReset.success,
    error: state.auth.passwordReset.error,
})

const mapDispatchToProps = {
    dispatchSendEmail: SendPasswordResetEmailAction
}
type props = NavigationScreenProps & ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps;
const enhance = connect(mapStateToProps, mapDispatchToProps);

export const PasswordReset = enhance(class Login extends Component<props> {
    state = {
        email: "",
    }

    render() {
        return (
            <SafeAreaView style={styles.view}>
                <IconHeadline color={colors.lightPurple} icon={icons.Lock} text="Passwort zurücksetzen" />
                <TextInputContainer marginHorizontal={20} marginVertical={14}>
                    <GreyTextInput marginVertical={8} placeholder="E-Mail" keyboardType="email-address" autoCapitalize="none" onChangeText={(t) => this.setState({ email: t.trim() })} />
                    <Text style={styles.text}>Gib die E-Mail-Adresse ein, mit der du dein Drivetastic Konto erstellt hast. So können wir dir einen Link zum Zurücksetzen schicken.</Text>
                </TextInputContainer>
                <Text style={styles.errorText}>{this.props.error || (this.props.success && "Email sent!")}</Text>
                <FAB marginLeft={4} icon={icons.Continue} color={"#fff"} borderColor={colors.bgGray} action={() => this.props.dispatchSendEmail(this.state.email)} />
            </SafeAreaView>
        )
    }
});

const styles = StyleSheet.create({
    view: {
        flex: 1
    },
    text: {
        color: "#858585",
        fontSize: fonts.md,
        width: "100%",
        textAlign: "center",
        marginVertical: 12
    },
    errorText: {
        color: colors.errorRed,
        fontSize: fonts.lg,
        width: "100%",
        textAlign: "center",
        marginVertical: 16

    },
    buttonContainer: {
        marginLeft: "22%",
        marginRight: "22%",
        height: "25%",
        marginTop: 18,
        minHeight: 140,
        maxHeight: 160
    }
});
