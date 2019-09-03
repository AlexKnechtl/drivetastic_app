import React from 'react'
import { StyleSheet, SafeAreaView, View, StatusBar, Animated, Image, Dimensions, Easing } from 'react-native'
import { MaterialTopTabBar } from 'react-navigation'
import { TabbarBg } from '../../img/';
import { colors } from 'base';
import { Logo } from '../specific';
import {icons} from "icons";

const range = 1;
const duration = 50;

const shake = new Animated.ValueXY({x:0,y:0});
Animated.loop(
    Animated.sequence([
        Animated.timing(shake, {
            toValue: {x: range, y: range },
            duration: duration
        }),
        Animated.timing(shake, {
            toValue: {x: -range, y: -range },
            duration: 2*duration
        }),
        Animated.timing(shake, {
            toValue: {x: 0, y: 0 },
            duration: duration
        })
    ])
).start();

const positionF = new Animated.Value(Dimensions.get("window").width*0.4);
Animated.loop(Animated.sequence([
    Animated.timing(
        positionF,
        {
            duration: 10000,
            toValue: Math.random() * Dimensions.get("window").width*0.8 + Dimensions.get("window").width*0.1,
            easing: Easing.ease
        }
    ),
    Animated.timing(
        positionF,
        {
            duration: 10000,
            toValue: Math.random() * Dimensions.get("window").width*0.8 + Dimensions.get("window").width*0.1,
            easing: Easing.ease
        }
    ),
    Animated.timing(
        positionF,
        {
            duration: 10000,
            toValue: Math.random() * Dimensions.get("window").width*0.8 + Dimensions.get("window").width*0.1,
            easing: Easing.ease
        }
    ),
    Animated.timing(
        positionF,
        {
            duration: 10000,
            toValue: Math.random() * Dimensions.get("window").width*0.8 + Dimensions.get("window").width*0.1,
            easing: Easing.ease
        }
    ),
    Animated.timing(
        positionF,
        {
            duration: 10000,
            toValue: Math.random() * Dimensions.get("window").width*0.8 + Dimensions.get("window").width*0.1,
            easing: Easing.ease
        }
    ),
    Animated.timing(
        positionF,
        {
            duration: 10000,
            toValue: Dimensions.get("window").width*0.4,
            easing: Easing.ease
        }
    )
])).start();

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
    const positionM = props.position.interpolate({
        inputRange: [0, 2],
        outputRange: [deviceWidth *0.1
            , deviceWidth * 0.8]
    });
    const positionC = props.position.interpolate({
        inputRange: [0, 2],
        outputRange: [deviceWidth *0.8
            , deviceWidth * 0.1]
    });
    const rotate = shake.x.interpolate({
        inputRange: [-range/2, range/2],
        outputRange: ["-10deg", "10deg"]
    });

    return (
        <View>
            <StatusBar barStyle="light-content" translucent={true} backgroundColor="#0000" />
            <View style={[styles.background]}>
                <Animated.Image source={TabbarBg} style={{ flex: 1, width: deviceWidth * 1.2, transform: [{ translateX: position }] }} />
                <Animated.Image source={icons.Motorbike} style={[styles.animationImage,{transform: [{ translateX: positionM }, {translateY: shake.y}, {rotateX: rotate}] }]} />
                <Animated.Image source={icons.BlackCar} style={[styles.animationImage,{bottom: 10, transform: [{ translateX: positionC }, {rotateX: rotate}] }]} />
                <Animated.Image source={icons.FlyingCar} style={[styles.animationImage,{bottom: null, top: 20, transform: [{ translateX: positionF }, {rotateX: rotate}] }]} />
                <SafeAreaView style={[styles.innerView, styles.background, styles.fixed]}>
                    <Logo paddingHorizontal={20} fontSize={36} paddingVertical={6} />
                </SafeAreaView>
            </View>
            <MaterialTopTabBar {...props} style={{ ...styles.materialTopBar, backgroundColor: backgroundColor }} />
        </View>
    )
}

const styles = StyleSheet.create({
    animationImage:{
        position: "absolute", 
        bottom: 0, 
        width: Dimensions.get("window").width * 0.1,
        height: "auto", 
        aspectRatio: 1, 
    },
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
