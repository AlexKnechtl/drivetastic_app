import React from 'react'
import { TouchableOpacity, StyleSheet, Image, Text } from 'react-native';
import { padding } from '../../base';

type ButtonProps = {
    color: string,
    icon: object,
    text: string
}

const IconButton = ({ color, icon, text }: ButtonProps) => {
    return (
        <TouchableOpacity style={{ backgroundColor: color, borderRadius: 10, flex: 1, alignItems: "center", margin: 7, padding: padding.md }}>
            <Image resizeMode="contain" style={styles.icon} source={icon} />
            <Text style={styles.text}>
                {text}
            </Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
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