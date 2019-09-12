import React, { useContext } from 'react'
import { StyleSheet, Image, TouchableOpacity } from 'react-native';
import { ThemeContext } from 'base';

type InputProps = {
    iconSize?: number,
    size?: number,
    marginRight?: number,
    iconLeft?: number,
    icon: object,
    onPress: () => void
}

const QuestionFAB = ({ marginRight = 0, icon, iconLeft = 0, onPress, size = 64, iconSize = 32 }: InputProps) => {
    const colors = useContext(ThemeContext);
    return (
        <TouchableOpacity activeOpacity={.7} onPress={onPress} style={{ ...styles.fabStyle, height: size, borderColor: colors.softGray, width: size, marginRight: marginRight }}>
            <Image style={{ ...styles.icon, height: iconSize, width: iconSize, marginLeft: iconLeft }} resizeMode="contain" source={icon} />
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
        width: 32
    }
});

export { QuestionFAB };
