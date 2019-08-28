import React from 'react'
import { StyleSheet, Image, Text, TouchableOpacity } from 'react-native';

type HeadlineProps = {
    flex: number,
    rowDirection?: string,
    marginRight: number,
    icon: object,
    text: string
}

const RowIconButton = ({ flex = 0, icon, text, marginRight = 0, rowDirection="row" }: HeadlineProps) => {
    return (
        <TouchableOpacity activeOpacity={.8} style={{ ...styles.button, marginRight: marginRight, flex: flex, flexDirection: rowDirection }}>
            <Image resizeMode="contain" style={styles.icon} source={icon} />
            <Text style={styles.text}>{text}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        flexDirection: "row",
        borderRadius: 10,
        paddingVertical: 6,
        backgroundColor: '#fff',
        paddingHorizontal: 8,
        alignItems: "center",
        height: 55
    },
    icon: {
        height: 20,
        width: 20
    },
    text: {
        color: '#000',
        fontSize: 16,
        fontWeight: "bold",
        textAlign: "center",
        marginHorizontal: 8
    },
});

export { RowIconButton };
