import React from 'react'
import { View, ImageBackground, StyleSheet, SafeAreaView, Animated } from 'react-native'
import { MaterialTopTabBar } from 'react-navigation'
import { BackgroundMain } from '../../img/';
import { colors } from 'base';
import { Logo } from '../specific';

const TabBar = (props: any) => {
    const backgroundColor = props.position.interpolate({
        inputRange: [0, 1, 2],
        outputRange: [colors.turquoise, colors.lightBlue, colors.middleGray],
    })
    return (
        <View>
            <ImageBackground source={BackgroundMain} style={{ aspectRatio: 5 / 3, width: "100%" }}>
                <SafeAreaView style={{ backgroundColor: "#9999", flex: 1, flexDirection: "column" }}>
                    <Logo paddingHorizontal={20} fontSize={40} paddingVertical={8} />
                    <Animated.View style={{ flex: 1, position: "absolute", paddingBottom: 10, bottom: 0, left: 0, right: 0, backgroundColor: backgroundColor }}>
                        <MaterialTopTabBar {...props} style={{ backgroundColor: "#0000", elevation: 0 }} />
                    </Animated.View>
                </SafeAreaView>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({

})

export default TabBar;
