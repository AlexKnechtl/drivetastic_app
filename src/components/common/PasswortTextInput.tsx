import React from 'react'
import { View, StyleSheet, TextInput, Image, TouchableOpacity } from 'react-native';
import { fonts, colors } from 'base';
import { Eye } from '../../icons';

type PasswortProps = {
    hint: string,
    password: boolean,
    value: string,
    onChangeText: object,
    marginVertical: number,
    type: string,
    onPress: () => void
}

const PasswortTextInput = ({ hint, password, value, onChangeText, marginVertical, onPress }: PasswortProps) => {
    return (
        <View style={{ ...styles.inputContainer, marginVertical: marginVertical }}>
            <TouchableOpacity activeOpacity={.6} onPress={onPress}>
                <Image resizeMode="contain" style={styles.icon} source={Eye} />
            </TouchableOpacity>
            <TextInput
                style={{ flex: 1 }}
                placeholder={hint}
                secureTextEntry={password ? false : true}
                value={value}
                autoCorrect={false}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: "row-reverse",
        backgroundColor: colors.bgGray,
        borderRadius: 10,
        width: "100%",
        paddingHorizontal: 8,
        alignItems: "center",
        height: 50
    },
    icon: {
        width: 26,
        marginRight: 12
    },
    text: {
        color: '#fff',
        fontWeight: "bold",
        fontSize: fonts.lg
    },
});

export { PasswortTextInput };
