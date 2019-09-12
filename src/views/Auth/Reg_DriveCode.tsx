import React, { Component } from 'react';
import { View, SafeAreaView, StyleSheet, Text, Dimensions, StatusBar } from 'react-native';
import HideWithKeyboard from 'react-native-hide-with-keyboard';

import { IconHeadline, TextInputContainer, FAB, IconButton, DismissKeyboard } from 'components/common';
import { fonts, ThemeContext } from 'base';
import { icons } from '../../icons';
import { GreyDrivecodeInput } from 'components/specific';

import QRCodeScanner from "react-native-qrcode-scanner";
import Permissions from 'react-native-permissions';
import { connect } from "react-redux";
import { StateType } from 'core';
import { NavigationScreenProps } from 'react-navigation';
import { StartCheckDrivecodeAction } from "core";

const mapStateToProps = (state: StateType) => ({
    codeValid: state.auth.tokenCheck.success,
    error: state.auth.tokenCheck.error
})

const mapDispatchToProps = {
    dispatchCheckToken: StartCheckDrivecodeAction

}
type props = NavigationScreenProps & ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps;
const enhance = connect(mapStateToProps, mapDispatchToProps);

export const Reg_DriveCode = enhance(class Reg_DriveCode extends Component<props> {
    state = {
        driveCode: "",
        showQrcodeReader: false,
        error: "asdf"
    }

    requestCameraPermission = () => {
        this.setState({ error: "working..." })
        Permissions.request('camera').then(response => {
            this.setState({ showQrcodeReader: true, error: response });
        }).catch(reason => this.setState({ error: reason }));
    }

    static contextType = ThemeContext;

    render() {
        this.props.codeValid && this.props.navigation.navigate("enterDetails");
        return (
            <SafeAreaView style={styles.view}>
                <DismissKeyboard>
                    <StatusBar translucent={false} barStyle="dark-content" backgroundColor="#fff" />
                    <IconHeadline color={this.context.lightBlue} icon={icons.AddPeople} text="Registration" />
                    <Text style={[styles.text, {color: this.context.darkerGray}]}>Dein Drive-Code</Text>
                    <TextInputContainer marginHorizontal={18}>
                        <GreyDrivecodeInput onChangeText={t => this.setState({ driveCode: t })} text={this.state.driveCode} hint="Gib hier deinen 12-stelligen Code ein." />
                    </TextInputContainer>
                    <Text style={[styles.errorText, {color: this.context.errorRed}]}>{this.props.error || (this.props.codeValid && "Code valid!!")}</Text>
                    {this.state.showQrcodeReader || <HideWithKeyboard>
                        <View style={styles.buttonContainer}>
                            <IconButton onPress={this.requestCameraPermission} color={this.context.lightBlue} icon={icons.QrCode} text="QR-Code scannen" />
                        </View>
                    </HideWithKeyboard>}
                    {this.state.showQrcodeReader &&
                        <View style={{ flex: 1, justifyContent: "flex-start", alignItems: "center" }}>
                            <View style={{ width: Dimensions.get("screen").width * 0.5, height: Dimensions.get("screen").width * 0.5 }}>
                                <QRCodeScanner fadeIn={false}
                                    //@ts-ignore
                                    cameraStyle={styles.cameraStyle}
                                    cameraProps={{ ratio: "1:1" }}
                                    onRead={(e) => { this.setState({ driveCode: e.data, showQrcodeReader: false }); this.props.dispatchCheckToken(e.data) }}
                                />
                            </View>
                        </View>}
                    <FAB action={() => { this.props.dispatchCheckToken(this.state.driveCode); this.props.codeValid && this.props.navigation.navigate("enterDetails") }} marginLeft={4} icon={icons.Continue} color={"#fff"} borderColor={this.context.bgGray} />
                </DismissKeyboard>
            </SafeAreaView>
        )
    }
})

const styles = StyleSheet.create({
    view: {
        flex: 1
    },
    cameraStyle: {
        width: Dimensions.get("screen").width * 0.5,
        height: Dimensions.get("screen").width * 0.5
    },
    text: {
        fontSize: fonts.lg,
        width: "100%",
        textAlign: "center",
        marginVertical: 16

    },
    errorText: {
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
