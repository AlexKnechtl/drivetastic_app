import React from 'react'
import { StyleSheet, Image, TouchableOpacity } from 'react-native';

type InputProps = {
    color: string,
    borderColor: string,
    icon: object,
    marginLeft: number,
    marginRight: number,
    action: () => void
}

const FAB = ({ color, icon, action, borderColor, marginLeft, marginRight }: InputProps) => {
    return (
        <TouchableOpacity activeOpacity={.7} onPress={action} style={{ ...styles.fabStyle, backgroundColor: color, borderColor: borderColor }}>
            <Image style={{ ...styles.icon, marginLeft: marginLeft, marginRight: marginRight }} resizeMode="contain" source={icon} />
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    fabStyle: {
        width: 64,
        height: 64,
        borderRadius: 30,
        position: "absolute",
        justifyContent: "center",
        alignItems: "center",
        bottom: 22,
        right: 22,
        elevation: 8,
        borderWidth: 1
    },
    icon: {
        height: 32,
        width: 32
    }
});

export { FAB };
