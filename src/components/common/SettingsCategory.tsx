import React from 'react'
import { TouchableOpacity, StyleSheet, Image, Text, View } from 'react-native';
import { colors } from 'base';

type CategoryProps = {
    title: string,
    text: string,
    icon: object,
    onPress: () => void
}

const SettingsCategory = ({ title, text, icon, onPress = () => null }: CategoryProps) => {
    return (
        <TouchableOpacity onPress={onPress} activeOpacity={.6} style={styles.buttton}>
            <Image style={styles.icon} resizeMode={"contain"} source={icon} />
            <View style={{ flex: 1 }}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.text}>{text}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    buttton: {
        backgroundColor: colors.bgGray,
        flexDirection: "row-reverse",
        borderRadius: 10,
        marginHorizontal: 14,
        marginBottom: 12,
        paddingVertical: 12,
        paddingHorizontal: 12,
        alignItems: "center"
    },
    icon: {
        height: "80%",
        width: 45
    },
    title: {
        color: colors.darkerGray,
        fontSize: 22
    },
    text: {
        color: colors.darkerGray,
        fontSize: 14
    }
});

export { SettingsCategory };
