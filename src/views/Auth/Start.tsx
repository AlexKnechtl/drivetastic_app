import React, { Component } from 'react';
import { View, StyleSheet, Text, Image, SafeAreaView, StatusBar } from 'react-native';

import { IconButton, ImageBg } from '../../components'
import { padding, colors, fonts, margin } from '../../base';

import { HighFive, AddPeople, Car, Truck, Motorcycle } from '../../icons';
import { BackgroundMain } from '../../img';
import { NavigationScreenProps } from 'react-navigation';

class Start extends Component<NavigationScreenProps> {
    render() {
        return (
            <View style={styles.view}>
                <StatusBar barStyle="light-content" />
                <SafeAreaView />
                <View style={styles.bottomLayout}>
                    <IconButton onPress={()=> this.props.navigation.navigate("signup")} color={colors.lightBlue} icon={AddPeople} text="Neu hier?" />
                    <IconButton onPress={()=> this.props.navigation.navigate("login")} color={colors.lightPurple} icon={HighFive} text="Einloggen" />
                </View>
                <ImageBg image={BackgroundMain} colorFilter="#0003">
                    <View style={{ backgroundColor: colors.lightBlue, borderRadius: 10, paddingHorizontal: 26, paddingVertical: 8 }}>
                        <Text>
                            <Text style={styles.logoTextBold}>Drive</Text>
                            <Text style={styles.logoText}>tastic</Text>
                        </Text>
                        <View style={styles.row}>
                            <Image style={styles.icon} resizeMode="contain" source={Motorcycle}/>
                            <Image style={styles.icon} resizeMode="contain" source={Car}/>
                            <Image style={styles.icon} resizeMode="contain" source={Truck}/>
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
        maxHeight: 160,
        alignContent: "stretch",
        padding: padding.sm
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

export { Start };
