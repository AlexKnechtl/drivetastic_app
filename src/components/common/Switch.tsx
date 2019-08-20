import React from 'react'
import { View, StyleSheet, Switch, Text } from 'react-native';

type SwitchProps = {
    marginBottom: number,
    bgColor: string,
    textColor: string,
    title?: string;
}

const GreyTextInput = ({ marginBottom = 12, title = " Test", bgColor, textColor }: SwitchProps) => {
    return (
        <View style={{ ...styles.switchContainer, marginBottom: marginBottom, backgroundColor: bgColor }}>
            <Text style={{...styles.text, color: textColor}}>{title}</Text>
            <Switch />
        </View>
    );
};

const styles = StyleSheet.create({
    switchContainer: {
        flexDirection: "row",
        borderRadius: 10,
        width: "100%",
        paddingHorizontal: 10,
        paddingVertical: 8,
        alignItems: "center",
        justifyContent: "space-between",
        height: 50
    },
    text: {
        color: '#fff',
        fontWeight: "bold",
        fontSize: 18,
    }
});

export { GreyTextInput };
