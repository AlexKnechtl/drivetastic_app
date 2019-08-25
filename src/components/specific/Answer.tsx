import React from 'react'
import { StyleSheet, Text, TouchableOpacity, Image } from 'react-native';
import { colors } from 'base';

type HeadlineProps = {
    textColor: string,
    text: string,
    backgroundColor: string,
    borderWidth: number,
    icon: object,
    onPress: () => void
}

const Answer = ({ textColor, backgroundColor = colors.questionBG, borderWidth = 0, icon, onPress, text }: HeadlineProps) => {
    return (
        <TouchableOpacity onPress={onPress} activeOpacity={0.6} style={{ ...styles.view, borderWidth: borderWidth, backgroundColor: backgroundColor }}>
            <Image style={styles.icon} source={icon} />
            <Text style={{ ...styles.text, color: textColor, flex: 1, alignSelf: "center" }}>{text}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    view: {
        padding: 12,
        borderColor: "#258056",
        flexDirection: "row-reverse",
        borderRadius: 10,
        minHeight: 65,
        marginBottom: 12
    },
    text: {
        fontSize: 14,
        textAlign: "left"
    },
    icon: {
        width: 30,
        height: 30,
        marginLeft: 12,
        alignSelf: "center"
    }
});

export { Answer };
