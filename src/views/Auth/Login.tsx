import React, { Component } from 'react';
import { StyleSheet, SafeAreaView, Text, StatusBar } from 'react-native';

import { IconHeadline, GreyTextInput, TextInputContainer, FAB, PasswortTextInput, ForgotPassword, DismissKeyboard } from 'components/common';
import { colors, fonts } from 'base';
import { icons } from '../../icons';
import { connect } from 'react-redux';
import { StateType, StartSignupAction, StartLoginAction } from 'core';
import { NavigationScreenProps } from 'react-navigation';

const mapStateToProps = (state: StateType) => ({
    success: state.auth.login.success,
    error: state.auth.login.error,
    token: state.auth.data.token
})

const mapDispatchToProps = {
    dispatchSignin: StartLoginAction

}
type props = NavigationScreenProps & ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps;
const enhance = connect(mapStateToProps, mapDispatchToProps);

export const Login = enhance(class Login extends Component<props> {
    state = {
        checked: false,
        email: "",
        password: ""
    }

    render() {
        return (
            <SafeAreaView style={styles.view}>
                <DismissKeyboard>
                    <StatusBar translucent={false} barStyle="dark-content" backgroundColor="#fff" />
                    <IconHeadline color={colors.lightPurple} icon={icons.HighFive} text="Login" />
                    <TextInputContainer marginHorizontal={18} marginVertical={14}>
                        <GreyTextInput marginVertical={8} placeholder="E-Mail" keyboardType="email-address" autoCapitalize="none" onChangeText={(t) => this.setState({ email: t.trim() })} />
                        <PasswortTextInput
                            onChangeText={(t) => this.setState({ password: t.trim() })}
                            marginVertical={8}
                            hint="Passwort" />
                    </TextInputContainer>
                    <Text style={styles.errorText}>{this.props.error || (this.props.success && this.props.navigation.navigate("home"))}</Text>
                    <ForgotPassword color={colors.darkerGray} borderColor={colors.softGray} borderWidth={1} onPress={() => { this.props.navigation.navigate("passwordReset") }} />
                    <FAB marginLeft={4} icon={icons.Continue} color={"#fff"} borderColor={colors.bgGray} action={() => {
                        this.props.dispatchSignin({ email: this.state.email, password: this.state.password });
                        this.props.success && this.props.navigation.navigate("home");
                    }} />
                </DismissKeyboard>
            </SafeAreaView>
        )
    }
});

const styles = StyleSheet.create({
    view: {
        flex: 1
    },
    text: {
        color: colors.darkerGray,
        fontSize: fonts.lg,
        width: "100%",
        textAlign: "center",
        marginVertical: 16

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
