import React, { Component } from 'react';
import { StyleSheet, SafeAreaView, Text } from 'react-native';
import HideWithKeyboard from 'react-native-hide-with-keyboard';

import { IconHeadline, GreyTextInput, TextInputContainer, FAB, AgbCheck, PasswortTextInput } from 'components/common';
import { colors, fonts } from 'base';
import { AddPeople, Continue } from '../../icons';
import { NavigationScreenProps } from 'react-navigation';
import { StateType, StartSignupAction } from 'core';
import { connect } from 'react-redux';

const mapStateToProps = (state: StateType) => ({
    success: state.auth.signup.success,
    error: state.auth.error,
    token: state.auth.token
})

const mapDispatchToProps = {
    dispatchSignUp: StartSignupAction
    
}
type props = NavigationScreenProps & ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps;
const enhance = connect(mapStateToProps, mapDispatchToProps);

export const Reg_UserData =  enhance(class Reg_UserData extends Component<props> {
    state = {
        checked: false,
        passwortVisible: false,
        email: "",
        password: "",
        name:""

    }

    render() {
        return (
            <SafeAreaView style={styles.view}>
                <IconHeadline color={colors.lightBlue} icon={AddPeople} text="Registration" />
                <TextInputContainer marginHorizontal={20} marginVertical={12}>
                    <GreyTextInput marginVertical={8} hint="E-Mail" onChangeText={(t)=> this.setState({email: t.trim()})} />
                    <GreyTextInput marginVertical={8} hint="Vorname" onChangeText={(t)=> this.setState({name: t.trim()})} />
                    <PasswortTextInput
                        onPress={() => { this.setState({ passwortVisible: !this.state.passwortVisible }) }}
                        password={this.state.passwortVisible}
                        marginVertical={8}
                        hint="Passwort" onChangeText={(t)=> this.setState({password: t.trim()})}/>
                </TextInputContainer>
                <HideWithKeyboard>
                    <AgbCheck
                        onPress={() => { this.setState({ checked: !this.state.checked }) }}
                        color={this.state.checked ? colors.lightBlue : "#fff"}
                        borderColor={"#D5D5D5"}
                        borderWidth={1} />
                </HideWithKeyboard>
                <Text style={{color: "#f00"}}>{this.props.error||(this.props.success&&this.props.navigation.navigate("tutorial"))}</Text>
                <FAB marginLeft={4} icon={Continue} color={"#fff"} borderColor={colors.bgGray} 
                action={()=>{ console.log({email: this.state.email, password: this.state.password, name: this.state.name, driveCode: this.props.token}); this.props.dispatchSignUp({email: this.state.email, password: this.state.password, name: this.state.name, driveCode: this.props.token});
                this.props.success&&this.props.navigation.navigate("tutorial");}}/>
            </SafeAreaView>
        )
    }
})

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
