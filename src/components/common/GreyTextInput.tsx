import React from 'react'
import { View, StyleSheet, TextInput, Keyboard, TextInputProps } from 'react-native';
import { fonts, colors } from 'base';

type InputProps = {
    marginVertical: number
    hint?: string;
} & TextInputProps;

const GreyTextInput = ({ marginVertical, hint, placeholder, ...restprops }: InputProps) => {
    return (
        <View style={{ ...styles.inputContainer, marginVertical: marginVertical }}>
            <TextInput
                style={{ width: "100%" }}
                placeholder={hint||placeholder}
                autoCorrect={false}
                {...restprops}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: "row",
        backgroundColor: colors.bgGray,
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
