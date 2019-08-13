import React from 'react'
import { StyleSheet, Image, Text, View, TouchableOpacity } from 'react-native';
import { icons } from '../../icons';
import { colors, fonts } from 'base';

type CheckProps = {
    color: string,
    borderColor: string,
    borderWidth: number,
    onPress: () => void
}

const AgbCheck = ({ color, borderColor, borderWidth, onPress }: CheckProps) => {
    return (
        <View style={{ ...styles.checkContainer, borderColor: borderColor, borderWidth: borderWidth }}>
            <TouchableOpacity onPress={onPress} activeOpacity={.6} style={{ ...styles.checkbox, backgroundColor: color, borderWidth: borderWidth, borderColor: borderColor }} >
                <Image style={styles.checkIcon} source={icons.Check} />
            </TouchableOpacity>
            <Text>
                <Text style={styles.text}>Ich habe die{" "}</Text>
                <Text style={styles.textUnderline}>Allgemeinen Geschäftsbedingungen{"\n"}</Text>
                <Text style={styles.text}>und die{" "}</Text>
                <Text style={styles.textUnderline}>Sicherheitsrichtlinien{" "}</Text>
                <Text style={styles.text}>von Drivetastic{"\n"}gelesen, verstanden und akzeptiere sie.</Text>
            </Text>
        </View >
    );
};

const styles = StyleSheet.create({
    checkContainer: {
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        alignSelf: "center",
        borderRadius: 6,
        padding: 8,
        maxWidth: "90%"
    },
    checkbox: {
        width: 26,
        height: 26,
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center",
        marginRight: 8,
        borderRadius: 4
    },
    checkIcon: {
        height: 12,
        width: 12
    },
    textUnderline: {
        color: colors.darkerGray,
        textDecorationLine: "underline",
        textDecorationColor: colors.darkerGray,
        fontSize: fonts.xs,
        fontWeight: "bold"
    },
    text: {
        color: colors.darkerGray,
        fontSize: fonts.xs
    }
});

export { AgbCheck };
