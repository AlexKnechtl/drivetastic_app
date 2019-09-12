import React from 'react'
import { TouchableOpacity, StyleSheet, Image, Text, View } from 'react-native';

type ButtonProps = {
    color: string,
    icon: object,
    text: string,
    iconWidth?: string,
    onPress: () => void
}

const IconButton = ({ color, icon, text, onPress = () => null, iconWidth = "35%" }: ButtonProps) => {
    return (
        <TouchableOpacity onPress={onPress} activeOpacity={.8} style={{ ...styles.buttton, backgroundColor: color }}>
            <Text style={styles.text}>{text}</Text>
            <View style={styles.view}>
                <Image resizeMode="contain" style={{ ...styles.icon, width: iconWidth }} source={icon} />
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    buttton: {
        borderRadius: 10,
        flex: 1,
        paddingVertical: 6,
        flexDirection: "column-reverse",
        marginHorizontal: 7
    },
    view: {
        justifyContent: "center",
        alignItems: "center"
    },
    icon: {
        height: "80%"
    },
    text: {
        color: '#fff',
        fontWeight: "bold",
        fontSize: 20,
        textAlign: "center"
    },
});

export { IconButton };
