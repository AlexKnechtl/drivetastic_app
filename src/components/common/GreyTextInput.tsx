import React from 'react'
import { View, StyleSheet, TextInput } from 'react-native';
import { fonts, margin, colors, padding } from 'base';

type InputProps = {
    hint: string,
    password: boolean,
    value: string,
    onChangeText: object
}

const GreyTextInput = ({ hint, password, value, onChangeText }: InputProps) => {
    return (
        <View style={{ ...styles.inputContainer }}>
            <TextInput
                placeholder={hint}
                secureTextEntry={password}
                value={value}
                autoCorrect={false}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: "row",
        backgroundColor: colors.softGray,
        borderRadius: 10,
        width: "100%",
        paddingHorizontal: 8,
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
});

export { GreyTextInput };
