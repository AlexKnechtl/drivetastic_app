import React from 'react'
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import { padding, colors } from 'base';
import * as Progress from 'react-native-progress';

type LogoProps = {
    text1: string,
    text2: string
}

const ModuleProgress = ({ text1, text2 }: LogoProps) => {
    return (
        <TouchableOpacity activeOpacity={.8} style={styles.buttton}>
            <View style={styles.row}>
                <Text style={styles.text}>{text1}</Text>
                <Text style={styles.text}>{text2 + "% Richtig"}</Text>
            </View>
            <Progress.Bar borderRadius={12} borderWidth={0} style={styles.progressBar} color={"#fff"} unfilledColor={"rgba(255, 255, 255, 0.2)"} />
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    buttton: {
        borderRadius: 10,
        marginTop: 14,
        paddingHorizontal: 14,
        paddingVertical: 8,
        borderWidth: 2,
        borderColor: "white"
    },
    progressBar: {
        width: "100%",
        height: 14
    },
    text: {
        color: '#fff',
        fontSize: 16,
        marginBottom: 6,
        fontWeight: "bold"
    },
    row: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 2
    }
});

export { ModuleProgress };
