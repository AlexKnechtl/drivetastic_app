import React from 'react'
import { StyleSheet, Image, Text, TouchableOpacity } from 'react-native';
import { icons } from '../../icons';
import { fonts, dimensions } from 'base';

type CheckProps = {
    color: string,
    borderColor: string,
    borderWidth: number,
    onPress: () => void
}

const ForgotPassword = ({ color, borderColor, borderWidth, onPress }: CheckProps) => {
    return (
        <TouchableOpacity activeOpacity={.6} onPress={onPress} style={{ ...styles.checkContainer, borderColor: borderColor, borderWidth: borderWidth }}>
            <Image resizeMode="contain" style={styles.icon} source={icons.Info} />
            <Text style={{ ...styles.text, color: color }}>Passwort vergessen / ändern</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    checkContainer: {
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        alignSelf: "center",
        borderRadius: 6,
        paddingVertical: 4,
        paddingHorizontal: 6,
        maxWidth: "90%"
    },
    text: {
        fontSize: fonts.xs
    },
    icon: {
        width: 20,
        height: 20,
        marginRight: 6
    }
});

export { ForgotPassword };
