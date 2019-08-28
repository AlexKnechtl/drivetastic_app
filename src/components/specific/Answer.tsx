import React from 'react'
import { StyleSheet, Text, TouchableOpacity, Image } from 'react-native';
import { colors } from 'base';
import { IAnswer } from 'core';
import { CircleCheck, False, ThumbsUp } from 'icons/indexHelper';


type HeadlineProps = {
    answer: IAnswer,
    selected?: boolean,
    shouldValidate?: boolean,
    onPress: () => void
}

const Answer = ({ onPress, selected = false, shouldValidate, answer }: HeadlineProps) => {
    let background = colors.questionBG, icon = undefined, borderWidth = 0, fontColor = "#000", iconSize = 24;

    if (selected) {
        background = colors.questionSelcted;
        icon = CircleCheck;
        iconSize = 24;
        if (answer.isRight && shouldValidate) {
            background = colors.questionRight;
            fontColor = "white";
            icon = ThumbsUp;
            iconSize = 28;
        } else if (!answer.isRight && shouldValidate) {
            background = colors.questionWrong;
            fontColor = '#fff';
            icon = False;
            iconSize = 20;
        }
    } else {
        background = colors.questionBG;
        if (answer.isRight && shouldValidate) {
            background = colors.questionLightGreen;
            fontColor = colors.questionGreenAccent;
            borderWidth = 1;
        } else if (!answer.isRight && shouldValidate) {
            background = colors.questionLightRed;
            fontColor = colors.questionRedAccent;
        }
    }

    return (
        <TouchableOpacity onPress={onPress} activeOpacity={0.6} style={{ ...styles.view, backgroundColor: background, borderWidth: borderWidth }}>
            <Image resizeMode="contain" style={{ ...styles.icon, height: iconSize, width: iconSize }} source={icon} />
            <Text style={{ ...styles.text, color: fontColor }}>{answer.answer}</Text>
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
        textAlign: "left",
        flex: 1,
        alignSelf: "center"
    },
    icon: {
        width: 24,
        marginLeft: 12,
        alignSelf: "center"
    }
});

export { Answer };
