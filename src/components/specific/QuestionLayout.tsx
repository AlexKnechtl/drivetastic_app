import React from 'react'
import { StyleSheet, View, Text } from 'react-native';
import { typeAlias } from '@babel/types';
import { colors } from 'base';
import { Difficulty } from 'core';
import { Trans, useTranslation } from 'react-i18next';

type HeadlineProps = {
    count: number,
    text: string,
    difficulty: Difficulty
}

const QuestionLayout = ({ count, text, difficulty }: HeadlineProps) => {
    const [t, i18n] = useTranslation();
    return (
        <View style={styles.container}>
            <View style={styles.row}>
                <Text style={styles.title}><Trans i18nKey="question">Frage {count}</Trans></Text>
                <Text style={styles.difficultyText}>{t(`difficulty.${difficulty}`)}</Text>
            </View>
            <Text style={styles.text}>{text}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.questionBG,
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
        backgroundColor: colors.lightGreen,
        paddingVertical: 2,
        paddingHorizontal: 8,
        alignSelf: "center"
    },
    text: {
        color: '#000',
        fontSize: 16,
        fontWeight: "bold"
    }
});

export { QuestionLayout };
