import React, { useContext } from 'react'
import { TouchableOpacity, StyleSheet, Image, Text, View } from 'react-native';
import { ThemeContext } from 'base';

type CategoryProps = {
    title: string,
    text: string,
    icon: object,
    onPress: () => void
}

const SettingsCategory = ({ title, text, icon, onPress = () => null }: CategoryProps) => {
    const colors = useContext(ThemeContext);
    return (
        <TouchableOpacity onPress={onPress} activeOpacity={.6} style={[styles.buttton, {backgroundColor: colors.bgGray}]}>
            <Image style={styles.icon} resizeMode={"contain"} source={icon} />
            <View style={{ flex: 1 }}>
                <Text style={{...styles.title, color: colors.darkerGray}}>{title}</Text>
                <Text style={{...styles.text, color: colors.darkerGray}}>{text}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    buttton: {
        flexDirection: "row-reverse",
        borderRadius: 10,
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
        fontSize: 22
    },
    text: {
        fontSize: 14
    }
});

export { SettingsCategory };
