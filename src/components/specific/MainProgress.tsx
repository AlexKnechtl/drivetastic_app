import React from 'react'
import { TouchableOpacity, StyleSheet, Text, View, Image } from 'react-native';
import { padding } from 'base';
import * as Progress from 'react-native-progress';

type ProgressProps = {
    title: string,
    percentage: number,
    color: string,
    unfilled: string
    icon: object,
    onPress: () => void
}

const MainProgress = ({ title, percentage, icon, color, unfilled, onPress }: ProgressProps) => {
    return (
        <TouchableOpacity onPress={onPress} activeOpacity={.8} style={{ ...styles.buttton, borderColor: color }}>
            <View style={styles.row}>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Image resizeMode="contain" style={styles.icon} source={icon} />
                    <Text style={{ ...styles.title, color: color }}>{title}</Text>
                </View>
                <View style={{ alignItems: "flex-end" }}>
                    <Text style={{ ...styles.percentage, color: color }}>+{(percentage * 100).toFixed(0)}%</Text>
                    <Text style={{ ...styles.text, color: color }}>seit letzter Woche</Text>
                </View>
            </View>
            <Progress.Bar progress={percentage} borderRadius={12} width={null} height={12} borderWidth={0} style={styles.progressBar} color={color} unfilledColor={unfilled} />
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    buttton: {
        borderRadius: 10,
        marginBottom: 12,
        paddingHorizontal: 14,
        paddingVertical: 8,
        borderWidth: 2
    },
    progressBar: {
        width: "100%",
        marginTop: 2
    },
    title: {
        fontSize: 16,
        fontWeight: "bold"
    },
    text: {
        fontSize: 12,
        marginBottom: 6,
        fontWeight: "bold"
    },
    percentage: {
        fontSize: 15,
        fontWeight: "bold"
    },
    row: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 2
    },
    icon: {
        width: 36,
        height: 22,
        marginRight: 8
    }
});

export { MainProgress };
