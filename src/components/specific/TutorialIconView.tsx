import React from 'react'
import { View, StyleSheet, Image, Text } from 'react-native';
import { colors, dimensions } from 'base';

type ButtonProps = {
    title: string,
    icon: object,
    text: string
}

const TutorialIconView = ({ title, icon, text }: ButtonProps) => {
    return (
        <View style={styles.background}>
            <Image resizeMode="contain" style={styles.icon} source={icon} />
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.text}>{text}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    background: {
        borderRadius: 10,
        backgroundColor: colors.bgGray,
        alignItems: "center",
        marginHorizontal: 24,
        marginTop: 12,
        paddingHorizontal: 18,
        paddingVertical: 30
    },
    icon: {
        width: "50%",
        height: dimensions.fullWidth*0.4,
        marginBottom: 12
    },
    title: {
        color: colors.darkerGray,
        fontSize: 28,
        fontWeight: "bold",
        width: "100%",
        textAlign: "center"
    },
    text: {
        color: colors.darkerGray,
        fontSize: 16,
        width: "100%",
        textAlign: "center"
    },
});

export { TutorialIconView };
