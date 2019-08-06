import React from 'react'
import { TouchableOpacity, StyleSheet, Image, Text } from 'react-native';
import { padding } from 'base';

type ButtonProps = {
    color: string,
    icon: object,
    text: string
}

const IconButton = ({ color, icon, text }: ButtonProps) => {
    return (
        <TouchableOpacity activeOpacity={.7} style={{ ...styles.buttton, backgroundColor: color, }}>
            <Image resizeMode="contain" style={styles.icon} source={icon} />
            <Text style={styles.text}>
                {text}
            </Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    buttton: {
        borderRadius: 10,
        flex: 1,
        alignItems: "center",
        margin: 7,
        paddingTop: 12,
        paddingBottom: 24,
    },
    icon: {
        width: "70%",
        height: "70%",
        marginBottom: 12
    },
    text: {
        color: '#fff',
        fontWeight: "bold",
        fontSize: 20,
        width: "100%",
        textAlign: "center"
    },
});

export { IconButton };
