import React from 'react'
import { TouchableOpacity, StyleSheet, Image, Text, View } from 'react-native';
import { padding } from 'base';
import { icons } from '../../icons';
import { Trans } from 'react-i18next';

const LearnButton = () => {
    return (
        <TouchableOpacity activeOpacity={.7} style={{ ...styles.buttton }}>
            <Image resizeMode="contain" style={styles.icon} source={icons.Learn} />
            <View style={{ flex: 1 }}>
                <Text style={styles.title}><Trans i18nKey="resumeLearning">Lernerfahrung fortsetzen</Trans></Text>
                <Text style={styles.text}>1.1 Verkehrsschilder</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    buttton: {
        borderRadius: 10,
        backgroundColor: "#547876",
        flexDirection: "row-reverse",
        marginHorizontal: 14,
        alignItems: "center",
        paddingHorizontal: padding.sm,
        paddingVertical: 10
    },
    icon: {
        height: 40,
        width: 50
    },
    title: {
        fontFamily: "SFUIDisplay-Medium",
        fontWeight: "bold",
        color: '#fff',
        fontSize: 18,
        width: "100%",
        textAlign: "left"
    },
    text: {
        color: '#fff',
        fontSize: 16,
        width: "100%",
        textAlign: "left"
    },
});

export { LearnButton };
