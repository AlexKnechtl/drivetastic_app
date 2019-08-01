import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import HideWithKeyboard from 'react-native-hide-with-keyboard';

import { IconHeadline, GreyTextInput, TextInputContainer, FAB, AgbCheck, PasswortTextInput, ForgotPassword } from 'components/common';
import { colors, fonts } from 'base';
import { Continue, HighFive } from '../../icons';

class Login extends Component {
    state = {
        checked: false,
        passwortVisible: false
    }

    render() {
        return (
            <View style={styles.view}>
                <IconHeadline color={colors.lightPurple} icon={HighFive} text="Login" />
                <TextInputContainer marginHorizontal={20} marginVertical={14}>
                    <GreyTextInput marginVertical={8} hint="E-Mail" />
                    <PasswortTextInput
                        onPress={() => { this.setState({ passwortVisible: !this.state.passwortVisible }) }}
                        password={this.state.passwortVisible}
                        marginVertical={8}
                        hint="Passwort" />
                </TextInputContainer>
                <ForgotPassword color={colors.darkerGray} borderColor={colors.softGray} borderWidth={1} />
                <FAB marginLeft={4} icon={Continue} color={"#fff"} borderColor={colors.bgGray} />
            </View>
        )
    }
}

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
    buttonContainer: {
        marginLeft: "22%",
        marginRight: "22%",
        height: "25%",
        marginTop: 18,
        minHeight: 140,
        maxHeight: 160
    }
});

export { Login };
