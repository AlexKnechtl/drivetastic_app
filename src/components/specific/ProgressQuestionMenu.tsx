import React from 'react'
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import * as Progress from 'react-native-progress';

type LogoProps = {
    percentage: number
}

const ProgressQuestionMenu = ({ percentage }: LogoProps) => {
    return (
        <View style={styles.buttton}>
            <View style={styles.row}>
                <Text style={styles.text}>Aktueller Stand</Text>
                <Text style={styles.text}>{(percentage * 100).toFixed(0) + "% Richtig"}</Text>
            </View>
            <Progress.Bar progress={percentage} borderRadius={12} width={null} height={12} borderWidth={0} style={styles.progressBar} color="#3FDF95" unfilledColor="#E16969" />
        </View>
    );
};

const styles = StyleSheet.create({
    buttton: {
        borderRadius: 10,
        marginBottom: 12,
        paddingHorizontal: 14,
        paddingVertical: 8,
        backgroundColor: '#fff',
        width: "100%"
    },
    progressBar: {
        width: "100%"
    },
    text: {
        color: '#000',
        fontSize: 16,
        marginBottom: 6,
        fontWeight: "bold"
    },
    row: {
        flexDirection: "row",
        justifyContent: "space-between"
    }
});

export { ProgressQuestionMenu };
