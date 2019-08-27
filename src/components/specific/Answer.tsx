import React from 'react'
import { StyleSheet, Text, TouchableOpacity, Image } from 'react-native';
import { colors } from 'base';
import { IAnswer } from 'core';

type HeadlineProps = {
    answer: IAnswer,
    selected?: boolean,
    shouldValidate?: boolean,
    onPress: () => void
}

const Answer = ({ onPress, selected = false, shouldValidate = false, answer }: HeadlineProps) => {
    return (
        <TouchableOpacity onPress={onPress} activeOpacity={0.6} style={{ ...styles.view, }}>
            <Image style={styles.icon} source={undefined} />
            <Text style={{ ...styles.text,  flex: 1, alignSelf: "center" }}>{answer.answer}</Text>
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
