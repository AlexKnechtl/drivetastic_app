import React from 'react'
import { StyleSheet, Image, Text, TouchableOpacity, View } from 'react-native';

type HeadlineProps = {
    flex: number,
    rowDirection?: string,
    marginRight: number,
    rotation: number,
    icon: object,
    text: string,
    onPress: () => void
}

const RowIconButton = ({ flex = 0, icon, text, rotation = 0, marginRight = 0, rowDirection = "row", onPress}: HeadlineProps) => {
    return (
        <TouchableOpacity onPress={onPress} activeOpacity={.8} style={{ ...styles.button, marginRight: marginRight, flex: flex, flexDirection: rowDirection }}>
            <Image resizeMode="contain" style={{ ...styles.icon, transform: [{ rotate: rotation + 'deg' }] }} source={icon} />
            <View style={{justifyContent: "center"}}>
                <Text style={styles.text}>{text}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        flexDirection: "row",
        borderRadius: 10,
        paddingVertical: 6,
        backgroundColor: '#fff',
        paddingHorizontal: 6,
        alignItems: "center",
        justifyContent: "center",
        height: 52
    },
    icon: {
        height: 20,
        width: 20,
        marginHorizontal: 6
    },
    text: {
        color: '#000',
        fontSize: 14,
        fontWeight: "bold",
        textAlign: "left",
        marginHorizontal: 6
    },
});

export { RowIconButton };
