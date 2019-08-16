import React from 'react'
import { StyleSheet, Text } from 'react-native';
import { colors } from 'base';

type LogoProps = {
    fontSize: number,
    paddingVertical?: number,
    paddingHorizontal?: number,
    marginTop?: number
}

const Logo = ({ fontSize, paddingVertical, paddingHorizontal, marginTop }: LogoProps) => {
    return (
        <Text style={{ ...styles.text, paddingHorizontal: paddingHorizontal, paddingVertical: paddingVertical, fontSize: fontSize, marginTop: marginTop }}>
            <Text style={{ fontWeight: "bold" }}>Drive</Text>
            <Text>tastic</Text>
        </Text>
    );
};

const styles = StyleSheet.create({
    text: {
        color: '#fff',
        backgroundColor: colors.lightBlue,
        alignSelf: "center",
        borderRadius: 8
    }
});

export { Logo };
