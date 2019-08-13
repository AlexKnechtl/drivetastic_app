import React, { Component } from 'react';
import { StyleSheet, Image, Text, SafeAreaView } from 'react-native';

import { IconHeadline, FAB, Language } from 'components/common';
import { colors, fonts, dimensions } from 'base';
import { icons } from '../../icons';
import { Austria } from '../../img';

class Reg_Languages extends Component {
    state = {
        pressed: false
    }

    render() {
        return (
            <SafeAreaView style={styles.view}>
                <IconHeadline color={colors.lightBlue} icon={icons.AddPeople} text="Registration" />
                <Image resizeMode="contain" style={styles.icon} source={icons.World} />
                <Text style={styles.text}>Wähle deine Sprache</Text>
                <Language
                    onPress={() => { this.setState({ pressed: !this.state.pressed }) }}
                    color={this.state.pressed ? colors.lightBlue : colors.bgGray}
                    textColor={this.state.pressed ? "#fff" : colors.darkerGray}
                    checkVisibility={this.state.pressed ? 1 : 0}
                    text="Deutsch"
                    icon={Austria} />
                <FAB marginLeft={4} icon={icons.Continue} color={"#fff"} borderColor={colors.bgGray} />
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
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: 4
    },
    icon: {
        width: "22%",
        height: (dimensions.fullWidth) * 0.22,
        marginVertical: 12,
        alignSelf: "center"
    }
});

export { Reg_Languages };
