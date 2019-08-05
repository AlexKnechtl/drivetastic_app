import React, { Component } from 'react';
import { View, SafeAreaView, StyleSheet, Text } from 'react-native';
import HideWithKeyboard from 'react-native-hide-with-keyboard';

import { IconHeadline, GreyTextInput, TextInputContainer, FAB, IconButton } from 'components/common';
import { colors, fonts } from 'base';
import { AddPeople, Continue, QrCode } from '../../icons';

class Reg_DriveCode extends Component {
    state = {
        driveCode: null
    }

    render() {
        return (
            <SafeAreaView style={styles.view}>
                <IconHeadline color={colors.lightBlue} icon={AddPeople} text="Registration" />
                <Text style={styles.text}>Dein Drive-Code</Text>
                <TextInputContainer marginHorizontal={12}>
                    <GreyTextInput hint="Gib hier deinen 12-stelligen Code ein." />
                </TextInputContainer>
                <HideWithKeyboard>
                    <View style={styles.buttonContainer}>
                        <IconButton color={colors.lightBlue} icon={QrCode} text="QR-Code scannen" />
                    </View>
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

export { Reg_DriveCode };
