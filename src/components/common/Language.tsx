import React from 'react'
import { TouchableOpacity, StyleSheet, Image, Text, View } from 'react-native';
import { fonts } from 'base';
import { icons } from '../../icons';

type LanguageProps = {
    color: string,
    textColor: string,
    icon: object,
    checkVisibility: boolean,
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
            <Image resizeMode="contain" style={{ height: 24, width: 24, opacity: checkVisibility ? 1 : 0 }} source={icons.CircleCheck} />
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    headline: {
        flexDirection: "row",
        borderRadius: 10,
        alignItems: "center",
        marginVertical: 5,
        paddingHorizontal: 14,
        paddingVertical: 10,
        marginHorizontal: 20
    },
    icon: {
        height: 36,
        width: 36,
        marginRight: 14
    }
});

export { Language };
