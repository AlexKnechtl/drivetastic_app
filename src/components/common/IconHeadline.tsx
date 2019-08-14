import React from 'react'
import { View, StyleSheet, Image, Text } from 'react-native';
import { fonts, margin } from 'base';

type HeadlineProps = {
    color: string,
    icon: object,
    text: string
}

const IconHeadline = ({ color, icon, text }: HeadlineProps) => {
    return (
        <View style={{ ...styles.headline, backgroundColor: color }}>
            <Image resizeMode="contain" style={styles.icon} source={icon} />
            <Text style={styles.text}>
                {text}
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    headline: {
        flexDirection: "row",
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
        margin: margin.lg,
        height: 55
    },
    icon: {
        height: "60%",
        width: 45,
        marginRight: 8
    },
    text: {
        color: '#fff',
        fontWeight: "bold",
        fontSize: fonts.lg,
    },
});

export { IconHeadline };
