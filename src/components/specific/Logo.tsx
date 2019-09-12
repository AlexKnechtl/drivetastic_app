import React, { useContext } from 'react'
import { StyleSheet, Text } from 'react-native';
import { ThemeContext } from 'base';

type LogoProps = {
    fontSize: number,
    paddingVertical?: number,
    paddingHorizontal?: number,
    marginTop?: number
}

const Logo = ({ fontSize, paddingVertical, paddingHorizontal, marginTop }: LogoProps) => {
    const colors = useContext(ThemeContext);
    return (
        <Text style={{ ...styles.text, paddingHorizontal: paddingHorizontal, paddingVertical: paddingVertical, fontSize: fontSize, marginTop: marginTop, backgroundColor: colors.lightBlue }}>
            <Text style={{ fontWeight: "bold" }}>Drive</Text>
            <Text>tastic</Text>
        </Text>
    );
};

const styles = StyleSheet.create({
    text: {
        color: '#fff',
        alignSelf: "center",
        borderRadius: 8
    }
});

export { Logo };
