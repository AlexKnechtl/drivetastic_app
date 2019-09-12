import React, { useContext } from 'react'
import { TouchableOpacity, StyleSheet, Text, View, Image } from 'react-native';
import * as Progress from 'react-native-progress';
import { icons } from 'icons';
import { ThemeContext } from 'base';

type LogoProps = {
    title: string,
    color: string,
    score: number
}

const BestResult = ({ title, color, score }: LogoProps) => {
    const colors = useContext(ThemeContext);
    return (
        <TouchableOpacity activeOpacity={.8} style={{ ...styles.buttton, backgroundColor: colors.lightGreen }}>
            <View style={styles.row}>
                <Text style={styles.text}>{title}</Text>
                <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                    <Text style={{ ...styles.text, marginRight: 6, marginBottom: 0 }}>{(score * 100).toFixed(0) + "%"}</Text>
                    <Image style={styles.icon} source={icons.ErfolgschanceWhite} />
                </View>
            </View>
            <Progress.Bar progress={score} borderRadius={12} width={null} height={12} borderWidth={0} style={styles.progressBar} color={"#fff"} unfilledColor={"rgba(255, 255, 255, 0.2)"} />
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    buttton: {
        borderRadius: 10,
        marginBottom: 12,
        paddingHorizontal: 12,
        marginHorizontal: 14,
        paddingVertical: 10
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
        height: 20
    }
});

export { BestResult };
