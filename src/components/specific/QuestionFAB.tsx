import React from 'react'
import { StyleSheet, Image, TouchableOpacity } from 'react-native';
import { colors } from 'base';

type InputProps = {
    iconSize?: number,
    size?: number,
    color: string,
    marginRight: number,
    icon: object,
    onPress: () => void
}

const QuestionFAB = ({ marginRight, icon, onPress, size = 64, iconSize = 32 }: InputProps) => {
    return (
        <TouchableOpacity activeOpacity={.7} onPress={onPress} style={{ ...styles.fabStyle, height: size, width: size, marginRight: marginRight }}>
            <Image style={{ ...styles.icon, height: iconSize, width: iconSize }} resizeMode="contain" source={icon} />
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    fabStyle: {
        backgroundColor: "white",
        borderRadius: 35,
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 1,
        elevation: 6,
        borderColor: colors.softGray,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
    },
    icon: {
        height: 32,
        width: 32,
        marginLeft: 4
    }
});

export { QuestionFAB };
