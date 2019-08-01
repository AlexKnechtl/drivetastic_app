import React from 'react'
import { View, Text, Button, ImageBackground, TouchableOpacity, Animated } from 'react-native'
import { MaterialTopTabBarProps } from 'react-navigation'
import { BackgroundMain } from '../../img/';
import { colors } from 'base';
import LinearGradient from 'react-native-linear-gradient';

type Props = {
    onTabPress: any,
    onTabLongPress: any,
    getAccessibilityLabel: (props: { route: any }) => string,
    getAccessibilityRole: (props: { route: any }) => string,
    getAccessibilityStates: (props: { route: any }) => string[],
    getButtonComponent: ({ route }: { route: any }) => any,
    getLabelText: ({ route }: { route: any }) => any,
    getTestID: (props: { route: any }) => string,
    renderIcon: any,
    dimensions: { width: number, height: number },
    isLandscape: boolean,
    safeAreaInset: { top: string, right: string, bottom: string, left: string },
} & MaterialTopTabBarProps;

const TabBar = (props: Props) => {
    console.log(props);
    const {
        navigation,
        onTabPress,
        onTabLongPress,
        safeAreaInset,
    } = props;
    var routes = navigation.state.routes;
    return (
        <View>
            <View>
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
                        <LinearGradient colors={['#0000','#000B']} start={{x: 0, y:0.2}} end={{x:0, y:1}} style={{flex: 1, flexDirection: "row", justifyContent: "space-around", position: "absolute", alignItems: "baseline",paddingBottom: 10, bottom: 0, left: 0, right: 0}}>
                            {
                                routes.map((route, idx) => {
                                    var focused = idx == navigation.state.index;
                                    return route && 
                                    <TouchableOpacity key={route.key} onPress={() => onTabPress({ route })} style={{borderBottomColor: "#FFF", borderBottomWidth: focused?4:0}} >
                                        <Animated.Text style={{color: '#fff', fontSize: focused ? 30 : 15}} allowFontScaling={true}>{props.getLabelText({route})}</Animated.Text>
                                    </TouchableOpacity>;
                                })
                            }
                        </LinearGradient>
                    </View>
                </ImageBackground>
            </View>
        </View>
    )
}

export default TabBar;
