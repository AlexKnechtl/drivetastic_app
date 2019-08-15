import React from 'react'
import { View, Text, ImageBackground, Animated } from 'react-native'
import { MaterialTopTabBar } from 'react-navigation'
import { BackgroundMain } from '../../img/';
import { colors } from 'base';

const TabBar = (props: any) => {
    const { index } = props.navigationState;
    const color = index === 0 ? colors.turquoise : index === 1 ? colors.lightBlue : colors.middleGray;
    return (
        <>
            <Animated.View>
                <ImageBackground source={BackgroundMain} style={{ aspectRatio: 5 / 3, width: "100%", }}>
                    <View style={{ backgroundColor: "#9999", flex: 1, flexDirection: "column", alignItems: "stretch" }}>
                        <View style={{ flex: 1, justifyContent: "center", alignItems: "center", shadowColor: "#000" }}>
                            <View style={{ backgroundColor: colors.lightBlue, borderRadius: 10, paddingHorizontal: 26, paddingVertical: 8, shadowOffset: { width: 0, height: 2, }, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5 }}>
                                <Text>
                                    <Text style={{ fontSize: 52, color: "#fff", fontWeight: "bold" }}>Drive</Text>
                                    <Text style={{ fontSize: 52, color: "#fff", fontWeight: "100" }}>tastic</Text>
                                </Text>
                            </View>
                        </View>
                        <View style={{ flex: 1, position: "absolute", paddingBottom: 10, bottom: 0, left: 0, right: 0, backgroundColor: color }}>
                            <MaterialTopTabBar {...props} style={{ backgroundColor: color, elevation: 0 }} />
                        </View>
                    </View>
                </ImageBackground>
            </Animated.View>
        </>
    )
}

export default TabBar;
