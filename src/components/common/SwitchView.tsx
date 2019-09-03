import React from 'react'
import { View, StyleSheet, Switch, Text } from 'react-native';

type SwitchProps = {
    marginBottom?: number,
    bgColor: string,
    textColor: string,
    title: string,
    switched: boolean,
    onChange:(change: boolean)=>void
}

const SwitchView = ({ marginBottom = 12, title = " Test", bgColor, textColor, switched, onChange }: SwitchProps) => {
    return (
        <View style={{ ...styles.switchContainer, marginBottom: marginBottom, backgroundColor: bgColor }}>
            <Text style={{...styles.text, color: textColor}}>{title}</Text>
            <Switch value={switched} onValueChange={onChange} />
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

export { SwitchView };
