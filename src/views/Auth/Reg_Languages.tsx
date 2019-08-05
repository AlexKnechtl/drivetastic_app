import React, { Component } from 'react';
import { View, StyleSheet, Image, Text, SafeAreaView } from 'react-native';

import { IconHeadline, FAB } from 'components/common';
import { colors, fonts, dimensions } from 'base';
import { AddPeople, Continue, World } from '../../icons';

class Reg_Languages extends Component {
    state = {

    }

    render() {
        return (
            <SafeAreaView style={styles.view}>
                <IconHeadline color={colors.lightBlue} icon={AddPeople} text="Registration" />
                <Image resizeMode="contain" style={styles.icon} source={World} />
                <Text style={styles.text}>Wähle deine Sprache</Text>
                <FAB marginLeft={4} icon={Continue} color={"#fff"} borderColor={colors.bgGray} />
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    view: {
        flex: 1
    },
    text: {
        color: colors.middleGray,
        fontSize: fonts.lg,
        width: "100%",
        textAlign: "center"
    },
    icon: {
        width: "22%",
        height: (dimensions.fullWidth) * 0.22,
        marginVertical: 12,
        alignSelf: "center"
    }
});

export { Reg_Languages };
