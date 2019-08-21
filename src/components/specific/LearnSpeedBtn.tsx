import React from 'react'
import { TouchableOpacity, StyleSheet, Image, Text } from 'react-native';
import { colors } from 'base';

type ButtonProps = {
    icon: object,
    text: string,
    backgroundColor: string,
    textColor: string,
    onPress: () => void
}

const LearnSpeedBtn = ({ icon, text, backgroundColor, textColor, onPress }: ButtonProps) => {
    return (
        <TouchableOpacity onPress={onPress} activeOpacity={.8} style={{ ...styles.buttton, backgroundColor: backgroundColor }}>
            <Image resizeMode="contain" style={styles.icon} source={icon} />
            <Text style={{ ...styles.text, color: textColor }}>
                {text}
            </Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    buttton: {
        aspectRatio: 1,
        borderRadius: 8,
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        margin: 7,
        borderWidth: 3,
        borderColor: colors.lightBlue
    },
    icon: {
        height: "48%",
        width: "80%",
        marginBottom: 6
    },
    text: {
        color: colors.turquoise,
        fontWeight: "bold",
        fontSize: 18,
        width: "100%",
        textAlign: "center"
    },
});

export { LearnSpeedBtn };
