import React, { useContext } from 'react'
import { View, StyleSheet, Image, Text } from 'react-native';
import { dimensions, ThemeContext } from 'base';

type ButtonProps = {
    title: string,
    icon: object,
    text: string
}

const TutorialIconView = ({ title, icon, text }: ButtonProps) => {
    const colors = useContext(ThemeContext);
    return (
        <View style={[styles.background, {backgroundColor: colors.bgGray}]}>
            <Image resizeMode="contain" style={styles.icon} source={icon} />
            <Text style={[styles.title, {color: colors.darkerGray}]}>{title}</Text>
            <Text style={[styles.text, {color: colors.darkerGray}]}>{text}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    background: {
        borderRadius: 10,
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
        fontSize: 28,
        fontWeight: "bold",
        width: "100%",
        textAlign: "center"
    },
    text: {
        fontSize: 16,
        width: "100%",
        textAlign: "center"
    },
});

export { TutorialIconView };
