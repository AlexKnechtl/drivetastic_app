import React from 'react'
import { View, StyleSheet, Image, Text, SafeAreaView, Platform } from 'react-native';
import { dimensions } from 'base';

type HeadlineProps = {
    color: string,
    icon: object,
    text: string
}

const ColoredIconHeader = ({ color, icon, text }: HeadlineProps) => {
    return (
        <SafeAreaView style={{ width: "100%", backgroundColor: color, alignItems: "center" }}>
            <Image resizeMode="contain" style={styles.icon} source={icon} />
            <View style={{ alignSelf: "center" }}>
                <Text style={styles.text}>{text}</Text>
                <View style={styles.line}></View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    icon: {
        width: "18%",
        height: dimensions.fullWidth * 0.19,
        marginTop: Platform.OS === 'android' ? 30 : 12,
        marginBottom: 12
    },
    text: {
        color: 'white',
        fontWeight: "bold",
        fontSize: 24,
        marginBottom: 4
    },
    line: {
        backgroundColor: "white",
        height: 2,
        marginBottom: 14
    }
});

export { ColoredIconHeader };
