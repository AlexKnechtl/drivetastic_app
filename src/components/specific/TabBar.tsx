import React from 'react'
import { View, Text, Button, ImageBackground, TouchableOpacity, Animated } from 'react-native'
import { MaterialTopTabBarProps, MaterialTopTabBar } from 'react-navigation'
import { BackgroundMain } from '../../img/';
import { colors } from 'base';
import LinearGradient from 'react-native-linear-gradient';

const TabBar = (props: any) => {
    return (
        <>
            <Animated.View>
                <ImageBackground source={BackgroundMain} style={{ aspectRatio: 5 / 3, width: "100%", }}>
                    <View style={{ backgroundColor: "#9999", flex: 1, flexDirection: "column", alignItems: "stretch"}}>
                        <View style={{ flex: 1, justifyContent: "center", alignItems: "center", shadowColor: "#000"}}>
                            <View style={{ backgroundColor: colors.lightBlue, borderRadius: 10, paddingHorizontal: 26, paddingVertical: 8, shadowOffset: { width: 0, height: 2, }, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5  }}>
                                <Text>
                                    <Text style={{ fontSize: 52, color: "#fff", fontWeight: "bold" }}>Drive</Text>
                                    <Text style={{ fontSize: 52, color: "#fff", fontWeight: "100" }}>tastic</Text>
                                </Text>
                            </View>
                        </View>
                        <LinearGradient colors={['#0000','#000B']} start={{x: 0, y:0.2}} end={{x:0, y:1}} style={{flex: 1, position: "absolute", paddingBottom: 10, bottom: 0, left: 0, right: 0}}>
                            <MaterialTopTabBar {...props}/>
                        </LinearGradient>
                    </View>
                </ImageBackground>
            </Animated.View>
        </>
    )
}

export default TabBar;
