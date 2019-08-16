import React from 'react'
import { ImageBackground, StyleSheet, SafeAreaView, View, StatusBar, Animated } from 'react-native'
import { MaterialTopTabBar } from 'react-navigation'
import { TabbarBg } from '../../img/';
import { colors } from 'base';
import { Logo } from '../specific';

const TabBar = (props: any) => {
    const backgroundColor = props.position.interpolate({
        inputRange: [0, 1, 2],
        outputRange: [colors.turquoise, colors.lightBlue, colors.middleGray]
    });
    return (
        <View>
            <StatusBar barStyle="light-content" translucent={true} backgroundColor="#0000" />
            <ImageBackground source={TabbarBg} style={styles.background}>
                <SafeAreaView style={styles.innerView}>
                    <Logo paddingHorizontal={20} fontSize={36} paddingVertical={6} />
                </SafeAreaView>
            </ImageBackground>
            <MaterialTopTabBar {...props} style={{ ...styles.materialTopBar, backgroundColor: backgroundColor }} />
        </View>
    )
}

const styles = StyleSheet.create({
    background: {
        aspectRatio: 5 / 2.5,
        width: "100%"
    },
    innerView: {
        backgroundColor: "#9999",
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    },
    materialTopBar: {
        elevation: 0,
        height: 56,
        width: "100%"
    },
    view: {
        width: "100%",
        height: 56
    }
})

export default TabBar;
