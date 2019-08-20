import React from 'react'
import { View, StyleSheet, TextInput, Text } from 'react-native';
import { fonts, colors } from 'base';

type InputProps = {
    title: string,
    value: string
}

const InputWithTitle = ({ value, title }: InputProps) => {
    return (
        <View style={{ ...styles.inputContainer }}>
            <Text style={styles.title}>{title}</Text>
            <TextInput style={{ width: "70%", height: "100%" }} autoCorrect={false}>
                {value}
            </TextInput>
        </View >
    );
};

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: "row",
        backgroundColor: colors.bgGray,
        borderRadius: 10,
        width: "100%",
        paddingHorizontal: 8,
        marginBottom: 12,
        alignItems: "center",
        height: 50
    },
    icon: {
        height: "60%",
        width: 50,
        marginRight: 16
    },
    text: {
        color: '#fff',
        fontWeight: "bold",
        fontSize: fonts.lg,
    },
    title: {
        fontSize: 16,
        color: '#BEBEBE',
        width: '30%'
    }
});

export { InputWithTitle };
