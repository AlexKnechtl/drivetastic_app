import React from 'react'
import { View, StyleSheet, TextInput } from 'react-native';
import { fonts, colors } from 'base';

type InputProps = {
    hint: string,
    value: string,
    onChangeText: (text:string)=>void,
    marginVertical: number
}

const GreyTextInput = ({ hint, value, onChangeText, marginVertical }: InputProps) => {
    return (
        <View style={{ ...styles.inputContainer, marginVertical: marginVertical }}>
            <TextInput
                style={{ width: "100%" }}
                placeholder={hint}
                value={value}
                onChangeText={onChangeText}
                autoCorrect={false}
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
