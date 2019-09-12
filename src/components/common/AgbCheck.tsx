import React, { useContext } from 'react'
import { StyleSheet, Image, Text, View, TouchableOpacity } from 'react-native';
import { icons } from '../../icons';
import { fonts, ThemeContext } from 'base';

type CheckProps = {
    color: string,
    borderColor: string,
    borderWidth: number,
    onPress: () => void
}

const AgbCheck = ({ color, borderColor, borderWidth, onPress }: CheckProps) => {
    const context = useContext(ThemeContext);
    return (
        <View style={{ ...styles.checkContainer, borderColor: borderColor, borderWidth: borderWidth }}>
            <TouchableOpacity onPress={onPress} activeOpacity={.6} style={{ ...styles.checkbox, backgroundColor: color, borderWidth: borderWidth, borderColor: borderColor }} >
                <Image resizeMode="contain" style={styles.checkIcon} source={icons.Check} />
            </TouchableOpacity>
            <Text>
                <Text style={[styles.text, {color: context.darkerGray}]}>Ich habe die{" "}</Text>
                <Text style={[styles.textUnderline, {color: context.darkerGray, textDecorationColor: context.darkerGray}]}>Allgemeinen Geschäftsbedingungen{"\n"}</Text>
                <Text style={[styles.text, {color: context.darkerGray}]}>und die{" "}</Text>
                <Text style={styles.textUnderline}>Sicherheitsrichtlinien{" "}</Text>
                <Text style={[styles.text, {color: context.darkerGray}]}>von Drivetastic{"\n"}gelesen, verstanden und akzeptiere sie.</Text>
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
        height: 13,
        width: 15
    },
    textUnderline: {
        textDecorationLine: "underline",
        fontSize: fonts.xs,
        fontWeight: "bold"
    },
    text: {
        fontSize: fonts.xs
    }
});

export { AgbCheck };
