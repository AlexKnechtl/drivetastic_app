import React from 'react'
import { TouchableOpacity, StyleSheet, Image, Text, View } from 'react-native';
import { fonts, margin } from 'base';
import { icons } from '../../icons';

type LanguageProps = {
    color: string,
    textColor: string,
    icon: object,
    checkVisibility: number,
    onPress: () => void,
    text: string
}

const Language = ({ color, textColor, icon, text, onPress, checkVisibility }: LanguageProps) => {
    return (
        <TouchableOpacity activeOpacity={.6} onPress={onPress} style={{ ...styles.headline, backgroundColor: color, justifyContent: "space-between" }}>
            <View style={{ alignItems: "center", flexDirection: "row" }}>
                <Image resizeMode="contain" style={styles.icon} source={icon} />
                <Text style={{ fontSize: fonts.lg, color: textColor }}>
                    {text}
                </Text>
            </View>
            <Image resizeMode="contain" style={{ height: 30, width: 30, opacity: checkVisibility }} source={icons.CircleCheck} />
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    headline: {
        flexDirection: "row",
        borderRadius: 10,
        alignItems: "center",
        margin: margin.lg,
        paddingHorizontal: 14,
        paddingVertical: 10,
        marginHorizontal: 20
    },
    icon: {
        height: 40,
        width: 40,
        marginRight: 12
    }
});

export { Language };
