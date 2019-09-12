import React, { useState, useContext } from 'react'
import { View, StyleSheet, TextInput, Image, TouchableOpacity, Platform } from 'react-native';
import { fonts, ThemeContext } from 'base';
import { icons } from '../../icons';

type PasswortProps = {
    hint: string,
    value?: string,
    onChangeText: (text: string) => void,
    marginVertical: number,
    type?: string //TODO: evualuate if needed at all
}

const PasswortTextInput = ({ hint, value, onChangeText, marginVertical }: PasswortProps) => {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const colors = useContext(ThemeContext);
    return (
        <View style={{ ...styles.inputContainer, marginVertical: marginVertical, backgroundColor: colors.bgGray }}>
            <TouchableOpacity activeOpacity={.6} onPress={() => setPasswordVisible(!passwordVisible)}>
                <Image resizeMode="contain" style={styles.icon} source={icons.Eye} />
            </TouchableOpacity>
            <TextInput
                style={{ flex: 1 }}
                placeholder={hint}
                secureTextEntry={Platform.OS == "ios" ? !passwordVisible : true}
                value={value}
                keyboardType={Platform.OS == "ios" ? "default" : passwordVisible ? "visible-password" : "default"}
                autoCapitalize="none"
                autoCorrect={false}
                onChangeText={onChangeText}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: "row-reverse",
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
