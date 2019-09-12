import React, { Component, useContext } from 'react';
import { View, StyleSheet, Text, Image, SafeAreaView, StatusBar } from 'react-native';

import { IconButton, ImageBg } from '../../components'
import { padding, fonts, margin, ThemeContext } from '../../base';

import { icons } from '../../icons';
import { BackgroundMain } from '../../img';
import { NavigationScreenProps } from 'react-navigation';
import { StateType, StartAutoLoginAction } from 'core';
import { connect } from 'react-redux';
const mapStateToProps = (state: StateType) => ({
    user: state.auth.data.user
})
type props = NavigationScreenProps & ReturnType<typeof mapStateToProps>;

// @(connect(mapStateToProps) as any)
class Start extends Component<props> {
    render() {
        this.props.user && this.props.navigation.navigate("home");
        const colors = useContext(ThemeContext);
        return (
            <View style={styles.view}>
                <StatusBar animated={true} translucent={true} backgroundColor="#0000" barStyle="light-content" />
                <SafeAreaView />
                <View style={styles.bottomLayout}>
                    <IconButton onPress={()=> this.props.navigation.navigate("signup")} color={colors.lightBlue} icon={icons.AddPeople} text="Neu hier?" />
                    <IconButton onPress={()=> this.props.navigation.navigate("login")} color={colors.lightPurple} icon={icons.HighFive} text="Einloggen" />
                </View>
                <ImageBg image={BackgroundMain} colorFilter="#0002">
                    <View style={{ backgroundColor: colors.lightBlue, borderRadius: 10, paddingHorizontal: 26, paddingVertical: 8 }}>
                        <Text>
                            <Text style={styles.logoTextBold}>Drive</Text>
                            <Text style={styles.logoText}>tastic</Text>
                        </Text>
                        <View style={styles.row}>
                            <Image style={styles.icon} resizeMode="contain" source={icons.Motorcycle}/>
                            <Image style={styles.icon} resizeMode="contain" source={icons.Car}/>
                            <Image style={styles.icon} resizeMode="contain" source={icons.Truck}/>
                        </View>
                    </View>
                </ImageBg>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    view: {
        flex: 1,
        flexDirection: "column-reverse"
    },
    bottomLayout: {
        flexDirection: "row",
        width: "100%",
        height: "25%",
        maxHeight: 140,
        alignContent: "stretch",
        paddingHorizontal: 7,
        paddingVertical: 12
    },
    logoTextBold: {
        fontSize: fonts.xl,
        color: "#fff",
        fontWeight: "bold"
    },
    logoText: {
        fontSize: fonts.xl,
        color: "#fff",
        fontWeight: "100"
    },
    row: {
        justifyContent: "center",
        flexDirection: "row"
    },
    icon: {
        width: 45,
        height: 45,
        marginHorizontal: margin.md
    }
});
const x = connect(mapStateToProps)(Start)
export {x as Start};
