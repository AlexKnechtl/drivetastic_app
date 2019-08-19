import React from 'react'
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import * as Progress from 'react-native-progress';
import { MultiProgressBar } from 'components/common/';

type LogoProps = {
    text1: string,
    percentage: number,
    percentage2: number
}

const ModuleProgress = ({ text1, percentage, percentage2 }: LogoProps) => {
    return (
        <TouchableOpacity activeOpacity={.8} style={styles.buttton}>
            <View style={styles.row}>
                <Text style={styles.text}>{text1}</Text>
                <Text style={styles.text}>{(percentage * 100).toFixed(0) + "% Richtig"}</Text>
            </View>
            <MultiProgressBar barStyle={{height: 12, backgroundColor: "rgba(255, 255, 255, 0.2)"}} progressbars={[
                {progress: percentage, color: "#f00"},
                {progress: percentage2, color: "#0f0", animated: true}
            ]} />
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    buttton: {
        borderRadius: 10,
        marginBottom: 12,
        paddingHorizontal: 14,
        paddingVertical: 8,
        borderWidth: 2,
        borderColor: "white"
    },
    progressBar: {
        width: "100%"
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
