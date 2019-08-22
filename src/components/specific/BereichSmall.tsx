import React from 'react'
import { TouchableOpacity, StyleSheet, Text, View, Image } from 'react-native';
import { icons } from 'icons';

type LogoProps = {
    title: string,
    color: string,
    erfolgschance: number,
    fortschritt: number
}

const BereichSmall = ({ title, color, erfolgschance }: LogoProps) => {
    return (
        <TouchableOpacity activeOpacity={.8} style={{ ...styles.buttton, backgroundColor: color }}>
            <View style={{ flexDirection: "row" }}>
                <Image style={styles.icon} source={icons.ErfolgschanceWhite} />
                <Text style={styles.percentageText}>{erfolgschance + "%"}</Text>
            </View>
            <Text numberOfLines={1} style={styles.text}>{title}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    buttton: {
        borderRadius: 10,
        marginBottom: 12,
        paddingHorizontal: 12,
        width: "100%",
        paddingVertical: 12,
        flexDirection: "row-reverse",
        alignItems: "center"
    },
    percentageText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: "bold"
    },
    text: {
        flex: 1,
        color: '#fff',
        fontSize: 16,
        fontWeight: "bold"
    },
    icon: {
        width: 30,
        height: 20,
        marginRight: 6,
        marginLeft: 8
    }
});

export { BereichSmall };
