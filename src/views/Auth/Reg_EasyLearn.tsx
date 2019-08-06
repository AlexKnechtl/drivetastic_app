import React, { Component } from 'react';
import { StyleSheet, Image, ScrollView, SafeAreaView, Text, View } from 'react-native';

import { FAB } from 'components/common';
import { colors, fonts, dimensions } from 'base';
import { Continue, Easy_Learn, Snail, Cheetah, Dog, Info, CheetahWhite, DogWhite, SnailWhite } from '../../icons';
import { Logo, LearnSpeedBtn } from '../../components/specific';

class Reg_EasyLearn extends Component {
    state = {
        pressedSlow: false,
        pressedNormal: false,
        pressedFast: false
    }

    slowPress() {
        this.setState({ pressedSlow: !this.state.pressedSlow, pressedNormal: false, pressedFast: false });
    }

    render() {
        return (
            <SafeAreaView style={styles.view}>
                <ScrollView>
                    <Logo fontSize={20} paddingHorizontal={18} paddingVertical={4} marginTop={18} />
                    <Text style={{ alignSelf: "center", color: colors.turquoise, marginTop: 4 }}>
                        <Text style={{ ...styles.bigTitle, fontWeight: "bold" }}>Easy</Text>
                        <Text style={styles.bigTitle}>Learn</Text>
                    </Text>
                    <Text style={{ ...styles.text, color: colors.turquoise }}>
                        Macht lernen einfach, einfach
                    </Text>
                    <Image style={styles.icon} source={Easy_Learn} />
                    <Text style={{ ...styles.text, color: colors.darkerGray, marginVertical: 12 }}>Unsere EasyLearn Automatik nutzt Daten deiner Übungszyklen um deine Lernerlebnis aktiv zu verbessern. So können wir dich vorausschauend deinem erfolgreichen Prüfungstermin näherbringen.</Text>
                    <Text style={{ ...styles.text, color: colors.turquoise, fontWeight: "bold", marginTop: 12 }}>Deine Lerngeschwindigkeit</Text>
                    <View style={{ flexDirection: "row", marginHorizontal: 20, marginTop: 12, height: 150 }}>
                        <LearnSpeedBtn
                            onPress={() => { this.setState({ pressedSlow: !this.state.pressedSlow, pressedNormal: false, pressedFast: false }) }}
                            textColor={this.state.pressedSlow ? "#fff" : colors.turquoise}
                            backgroundColor={this.state.pressedSlow ? colors.lightBlue : "#fff"}
                            icon={this.state.pressedSlow ? SnailWhite : Snail} text="Langsam" />
                        <LearnSpeedBtn
                            onPress={() => { this.setState({ pressedNormal: !this.state.pressedNormal, pressedSlow: false, pressedFast: false }) }}
                            textColor={this.state.pressedNormal ? "#fff" : colors.turquoise}
                            backgroundColor={this.state.pressedNormal ? colors.lightBlue : "#fff"}
                            icon={this.state.pressedNormal ? DogWhite : Dog} text="Normal" />
                        <LearnSpeedBtn
                            onPress={() => { this.setState({ pressedFast: !this.state.pressedFast, pressedNormal: false, pressedSlow: false }) }}
                            textColor={this.state.pressedFast ? "#fff" : colors.turquoise}
                            backgroundColor={this.state.pressedFast ? colors.lightBlue : "#fff"}
                            icon={this.state.pressedFast ? CheetahWhite : Cheetah} text="Schnell" />
                    </View>
                    <View style={styles.InfoView}>
                        <Image style={{ width: 18, height: 18, marginRight: 8 }} source={Info} />
                        <Text style={{ fontSize: 14, color: colors.darkerGray }}>Die Lerngeschwindigkeit bestimmt wie oft du Fragen zur Einprägung wiederholt bekommst.</Text>
                    </View>
                </ScrollView>
                <FAB marginLeft={4} icon={Continue} color={"#fff"} borderColor={colors.bgGray} />
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    view: {
        flex: 1
    },
    bigTitle: {
        fontSize: 42,
        width: "100%",
    },
    icon: {
        width: "30%",
        height: (dimensions.fullWidth) * 0.3,
        marginVertical: 4,
        marginTop: 18,
        marginBottom: 10,
        alignSelf: "center"
    },
    text: {
        fontSize: 18,
        alignSelf: "center",
        marginHorizontal: 20,
        textAlign: "center"
    },
    InfoView: {
        alignSelf: "center",
        maxWidth: "70%",
        borderWidth: 2,
        borderRadius: 6,
        marginTop: -12,
        marginBottom: 100,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        paddingVertical: 4,
        paddingHorizontal: 18,
        borderColor: colors.darkerGray
    },
});

export { Reg_EasyLearn };
