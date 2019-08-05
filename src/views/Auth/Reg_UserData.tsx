import React, { Component } from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import HideWithKeyboard from 'react-native-hide-with-keyboard';

import { IconHeadline, GreyTextInput, TextInputContainer, FAB, AgbCheck, PasswortTextInput } from 'components/common';
import { colors, fonts } from 'base';
import { AddPeople, Continue } from '../../icons';

class Reg_UserData extends Component {
    state = {
        checked: false,
        passwortVisible: false
    }

    render() {
        return (
            <SafeAreaView style={styles.view}>
                <IconHeadline color={colors.lightBlue} icon={AddPeople} text="Registration" />
                <TextInputContainer marginHorizontal={20} marginVertical={12}>
                    <GreyTextInput marginVertical={8} hint="E-Mail" />
                    <GreyTextInput marginVertical={8} hint="Vorname" />
                    <PasswortTextInput
                        onPress={() => { this.setState({ passwortVisible: !this.state.passwortVisible }) }}
                        password={this.state.passwortVisible}
                        marginVertical={8}
                        hint="Passwort" />
                </TextInputContainer>
                <HideWithKeyboard>
                    <AgbCheck
                        onPress={() => { this.setState({ checked: !this.state.checked }) }}
                        color={this.state.checked ? colors.lightBlue : "#fff"}
                        borderColor={"#D5D5D5"}
                        borderWidth={1} />
                </HideWithKeyboard>
                <FAB marginLeft={4} icon={Continue} color={"#fff"} borderColor={colors.bgGray} />
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    view: {
        flex: 1
    },
    text: {
        color: colors.bgGray,
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

export { Reg_UserData };
