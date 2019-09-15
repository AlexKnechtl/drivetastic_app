import React, { useContext } from 'react'
import { StyleSheet, View, Text } from 'react-native';
import { typeAlias } from '@babel/types';
import { Difficulty } from 'core';
import { Trans, useTranslation } from 'react-i18next';
import { colorType, ThemeContext } from 'base';

type HeadlineProps = {
    count: number | string,
    text: string,
    difficulty: Difficulty
}


function MapDifficultyToColor(difficulty: Difficulty, colors: colorType) {
    switch (difficulty) {
        case "Easy": return colors.lightGreen;
        case "Medium": return colors.lightBlue;
        case "Hard": return colors.darkRed;
        default:
            break;
    }
}

const QuestionLayout = ({ count, text, difficulty }: HeadlineProps) => {
    const colors = useContext(ThemeContext);
    const [t, i18n] = useTranslation();
    return (
        <View style={[styles.container, { backgroundColor: colors.questionBG }]}>
            <View style={styles.row}>
                <Text style={{ fontSize: 22, color: colors.questionText }}><Trans i18nKey="question" i18n={i18n}>Frage </Trans>{count}</Text>
                <Text style={[styles.difficultyText, { backgroundColor: MapDifficultyToColor(difficulty, colors) }]}>{t(`difficulty.${difficulty}`)}</Text>
            </View>
            <Text style={{ ...styles.text, color: colors.questionText }}>{text}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 14,
        width: "100%"
    },
    row: {
        flexDirection: "row",
        marginBottom: 8
    },
    title: {
        fontSize: 22,
        color: '#000'
    },
    difficultyText: {
        color: "white",
        marginLeft: 12,
        fontSize: 12,
        borderRadius: 8,
        paddingVertical: 2,
        paddingHorizontal: 8,
        alignSelf: "center"
    },
    text: {
        fontSize: 16,
        fontWeight: "bold"
    }
});

export { QuestionLayout };
