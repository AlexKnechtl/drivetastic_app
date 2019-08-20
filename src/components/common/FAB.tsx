import React from 'react'
import { StyleSheet, Image, TouchableOpacity } from 'react-native';

type InputProps = {
    color: string,
    borderColor: string,
    icon: object,
    marginLeft?: number,
    marginRight?: number,
    rotation?: number,
    action: () => void
}

const FAB = ({ color, icon, action, borderColor, marginLeft = 0, marginRight = 0, rotation = 0 }: InputProps) => {
    return (
        <TouchableOpacity activeOpacity={.7} onPress={action} style={{ ...styles.fabStyle, backgroundColor: color, borderColor: borderColor }}>
            <Image style={{ ...styles.icon, marginLeft: marginLeft, marginRight: marginRight, transform: [{ rotate: rotation+'deg'}] }} resizeMode="contain" source={icon} />
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    fabStyle: {
        width: 64,
        height: 64,
        borderRadius: 35,
        position: "absolute",
        justifyContent: "center",
        alignItems: "center",
        bottom: 22,
        right: 22,
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

export { FAB };
