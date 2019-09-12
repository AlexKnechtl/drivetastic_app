import React from 'react'
import { TouchableOpacity, StyleSheet, Text, View, Image } from 'react-native';
import * as Progress from 'react-native-progress';
import { icons } from 'icons';

type LogoProps = {
    title: string,
    color: string,
    erfolgschance: number,
    fortschritt: number
}

const BereichProgress = ({ title, color, erfolgschance, fortschritt }: LogoProps) => {
    return (
        <TouchableOpacity activeOpacity={.8} style={{ ...styles.buttton, backgroundColor: color }}>
            <View style={styles.row}>
                <Text style={styles.text}>{title}</Text>
                <View style={{ flexDirection: "row" }}>
                    <Image style={styles.icon} source={icons.ErfolgschanceWhite} />
                    <Text style={styles.text}>{(erfolgschance*100).toFixed(1) + "%"}</Text>
                </View>
            </View>
            <Progress.Bar progress={fortschritt} borderRadius={12} width={null} height={12} borderWidth={0} style={styles.progressBar} color={"#fff"} unfilledColor={"rgba(255, 255, 255, 0.2)"} />
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    buttton: {
        borderRadius: 10,
        marginBottom: 12,
        paddingHorizontal: 12,
        paddingVertical: 10,
    },
    progressBar: {
        width: "100%"
    },
    text: {
        color: '#fff',
        fontSize: 16,
        marginBottom: 4,
        fontWeight: "bold"
    },
    row: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 2,
        marginBottom: 8
    },
    icon: {
        width: 30,
        height: 20,
        marginRight: 6
    }
});

export { BereichProgress };
