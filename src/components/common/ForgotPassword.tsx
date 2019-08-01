import React from 'react'
import { StyleSheet, Image, Text, TouchableOpacity } from 'react-native';
import { Info } from '../../icons';
import { colors, fonts, dimensions } from 'base';

type CheckProps = {
    color: string,
    borderColor: string,
    borderWidth: number,
    onPress: () => void
}

const ForgotPassword = ({ color, borderColor, borderWidth, onPress }: CheckProps) => {
    return (
        <TouchableOpacity activeOpacity={.6} onPress={onPress} style={{ ...styles.checkContainer, borderColor: borderColor, borderWidth: borderWidth }}>
            <Image resizeMode="contain" style={styles.icon} source={Info} />
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
        color: colors.darkerGray,
        fontSize: fonts.xs
    },
    icon: {
        width: 20,
        height: 20,
        marginRight: 6
    }
});

export { ForgotPassword };
