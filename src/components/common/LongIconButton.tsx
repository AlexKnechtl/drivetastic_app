import React from 'react'
import { TouchableOpacity, StyleSheet, Image, Text, View } from 'react-native';

type CategoryProps = {
    title: string,
    text: string,
    icon: object,
    bgColor: string,
    onPress: () => void
}

const LongIconButton = ({ title, text, icon, bgColor, onPress = () => null }: CategoryProps) => {
    return (
        <TouchableOpacity onPress={onPress} activeOpacity={.6} style={{...styles.buttton, backgroundColor: bgColor}}>
            <Image resizeMode="contain" style={styles.icon} source={icon} />
            <View style={{ flex: 1 }}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.text}>{text}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    buttton: {
        flexDirection: "row-reverse",
        borderRadius: 10,
        marginBottom: 12,
        paddingVertical: 14,
        paddingHorizontal: 12,
        alignItems: "center"
    },
    icon: {
        height: "100%",
        width: 65
    },
    title: {
        color: "white",
        fontWeight: "bold",
        marginBottom: 2,
        fontSize: 24
    },
    text: {
        color: "white",
        fontSize: 14
    }
});

export { LongIconButton };
