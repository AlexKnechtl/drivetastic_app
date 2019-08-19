import React from 'react'
import { StyleSheet, SafeAreaView, View, StatusBar, Animated, Image, Dimensions } from 'react-native'
import { MaterialTopTabBar } from 'react-navigation'
import { TabbarBg } from '../../img/';
import { colors } from 'base';
import { Logo } from '../specific';

const TabBar = (props: any) => {
    const backgroundColor = props.position.interpolate({
        inputRange: [0, 1, 2],
        outputRange: [colors.turquoise, colors.accentGreen, colors.middleGray]
    });
    const deviceWidth = Dimensions.get('window').width;
    const position = props.position.interpolate({
        inputRange: [0, 2],
        outputRange: [0, -deviceWidth * 0.2]
    });
    return (
        <View>
            <StatusBar barStyle="light-content" translucent={true} backgroundColor="#0000" />
            <View style={[styles.background]}>
                <Animated.Image source={TabbarBg} style={{ flex: 1, width: deviceWidth * 1.2, transform: [{ translateX: position }] }} />
                <SafeAreaView style={[styles.innerView, styles.background, styles.fixed]}>
                    <Logo paddingHorizontal={20} fontSize={36} paddingVertical={6} />
                </SafeAreaView>
            </View>
            <MaterialTopTabBar {...props} style={{ ...styles.materialTopBar, backgroundColor: backgroundColor }} />
        </View>
    )
}

const styles = StyleSheet.create({
    background: {
        aspectRatio: 5 / 2.5,
        width: "100%"
    },
    fixed: {
        top: 0,
        position: "absolute"
    },
    innerView: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    },
    materialTopBar: {
        elevation: 0,
        height: 52,
        width: "100%"
    }
})

export default TabBar;
