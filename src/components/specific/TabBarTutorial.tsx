import React, { useContext } from 'react'
import { View, Text, StyleSheet, SafeAreaView } from 'react-native'
import { dimensions, ThemeContext } from 'base'
import { Logo } from './Logo'

export const TabBarTutorial = (props: any) => {
    const colors = useContext(ThemeContext);
    return (
        <SafeAreaView style={{ backgroundColor: "rgba(112, 178, 174, 0.3)" }}>
            <View style={styles.background}>
                <Logo fontSize={dimensions.fullHeight * 0.035} paddingHorizontal={22} paddingVertical={8} />
            </View>
            <View style={{ backgroundColor: "#fff" }}>
                <Text style={[styles.title, {color: colors.darkerGray}]}>Hallo Florian!</Text>
                <Text style={[styles.text, {color: colors.darkerGray}]}>Bevor wir starten zeige ich dir, was dich in Drivetastic erwartet:</Text>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    background: {
        justifyContent: "center",
        alignItems: "center",
        padding: dimensions.fullHeight*0.05
    },
    title: {
        marginTop: 14,
        marginBottom: 8,
        width: "90%",
        alignSelf: "center",
        textAlign: "center",
        fontSize: 28,
        fontWeight: "bold"
    },
    text: {
        width: "90%",
        marginBottom: 8,
        alignSelf: "center",
        textAlign: "center",
        fontSize: 20,
        fontWeight: "bold"
    }
});