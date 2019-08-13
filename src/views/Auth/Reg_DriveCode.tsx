import React, { Component } from 'react';
import { View, SafeAreaView, StyleSheet, Text, TouchableOpacity, PermissionsAndroid, Alert } from 'react-native';
import HideWithKeyboard from 'react-native-hide-with-keyboard';

import { IconHeadline, GreyTextInput, TextInputContainer, FAB, IconButton } from 'components/common';
import { colors, fonts } from 'base';
import { AddPeople, Continue, QrCode } from '../../icons';
import { GreyDrivecodeInput } from 'components/specific';

import QRCodeScanner from "react-native-qrcode-scanner";
import Permissions from 'react-native-permissions';
import { connect } from "react-redux";
import { StateType } from 'core';
import { NavigationScreenProps } from 'react-navigation';
import { StartCheckDrivecodeAction } from "core";

const mapStateToProps = (state: StateType) => ({
    codeValid: state.auth.tokenCheck.success,
    error: state.auth.error
})

const mapDispatchToProps = {
    dispatchCheckToken: StartCheckDrivecodeAction
    
}
type props = NavigationScreenProps & ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps;
const enhance = connect(mapStateToProps, mapDispatchToProps);

export const Reg_DriveCode =  enhance(class Reg_DriveCode extends Component<props> {
    state = {
        driveCode: "",
        showQrcodeReader: false,
        error: "asdf"
    }

    requestCameraPermission= () => {
        this.setState({error: "working..."})
        Permissions.request('camera').then(response=>{
            this.setState({showQrcodeReader: true, error: response });
        }).catch(reaseon => this.setState({error: reaseon}));
    }

    render() {
        return (
            <SafeAreaView style={styles.view}>
                <IconHeadline color={colors.lightBlue} icon={AddPeople} text="Registration" />
                <Text style={styles.text}>Dein Drive-Code</Text>
                <TextInputContainer marginHorizontal={12}>
                    <GreyDrivecodeInput onChangeText={t=> this.setState({driveCode: t})} text={this.state.driveCode} hint="Gib hier deinen 12-stelligen Code ein." />
                </TextInputContainer>
                <Text style={styles.errorText}>{this.props.error||(this.props.codeValid&&"Code valid!!")}</Text>
                <HideWithKeyboard>
                    <View style={styles.buttonContainer}>
                        <IconButton onPress={this.requestCameraPermission} color={colors.lightBlue} icon={QrCode} text="QR-Code scannen" />
                    </View>
                </HideWithKeyboard>
                {this.state.showQrcodeReader && 
                <QRCodeScanner onRead={(e)=> {this.setState({driveCode: e.data, showQrcodeReader: false}); this.props.dispatchCheckToken(e.data)}}/>}
                <FAB action={()=> {this.props.dispatchCheckToken(this.state.driveCode); this.props.codeValid&&this.props.navigation.navigate("enterDetails")}} marginLeft={4} icon={Continue} color={"#fff"} borderColor={colors.bgGray} />
            </SafeAreaView>
        )
    }
})

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
