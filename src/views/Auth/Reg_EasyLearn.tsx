import React, { Component } from 'react';
import { StyleSheet, Image, ScrollView, SafeAreaView, Text, View } from 'react-native';

import { FAB } from 'components/common';
import { dimensions, ThemeContext } from 'base';
import { icons } from '../../icons';
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

    static contextType = ThemeContext;

    render() {
        return (
            <SafeAreaView style={styles.view}>
                <ScrollView>
                    <Logo fontSize={20} paddingHorizontal={18} paddingVertical={4} marginTop={18} />
                    <Text style={{ alignSelf: "center", color: this.context.turquoise, marginTop: 4 }}>
                        <Text style={{ ...styles.bigTitle, fontWeight: "bold" }}>Easy</Text>
                        <Text style={styles.bigTitle}>Learn</Text>
                    </Text>
                    <Text style={{ ...styles.text, color: this.context.turquoise }}>
                        Macht lernen einfach, einfach
                    </Text>
                    <Image style={styles.icon} source={icons.Easy_Learn} />
                    <Text style={{ ...styles.text, color: this.context.darkerGray, marginVertical: 12 }}>Unsere EasyLearn Automatik nutzt Daten deiner Übungszyklen um deine Lernerlebnis aktiv zu verbessern. So können wir dich vorausschauend deinem erfolgreichen Prüfungstermin näherbringen.</Text>
                    <Text style={{ ...styles.text, color: this.context.turquoise, fontWeight: "bold", marginTop: 12 }}>Deine Lerngeschwindigkeit</Text>
                    <View style={{ flexDirection: "row", marginHorizontal: 20, marginTop: 12, height: 150 }}>
                        <LearnSpeedBtn
                            onPress={() => { this.setState({ pressedSlow: !this.state.pressedSlow, pressedNormal: false, pressedFast: false }) }}
                            selected={this.state.pressedSlow}
                            icon={this.state.pressedSlow ? icons.SnailWhite : icons.Snail} text="Langsam" />
                        <LearnSpeedBtn
                            onPress={() => { this.setState({ pressedNormal: !this.state.pressedNormal, pressedSlow: false, pressedFast: false }) }}
                            selected={this.state.pressedNormal}
                            icon={this.state.pressedNormal ? icons.DogWhite : icons.Dog} text="Normal" />
                        <LearnSpeedBtn
                            onPress={() => { this.setState({ pressedFast: !this.state.pressedFast, pressedNormal: false, pressedSlow: false }) }}
                            selected={this.state.pressedFast}
                            icon={this.state.pressedFast ? icons.CheetahWhite : icons.Cheetah} text="Schnell" />
                    </View>
                    <View style={[styles.InfoView, {borderColor: this.context.darkerGray}]}>
                        <Image style={{ width: 18, height: 18, marginRight: 8 }} source={icons.Info} />
                        <Text style={{ fontSize: 14, color: this.context.darkerGray }}>Die Lerngeschwindigkeit bestimmt wie oft du Fragen zur Einprägung wiederholt bekommst.</Text>
                    </View>
                </ScrollView>
                {/* TODO: Implement action */}
                <FAB marginLeft={4} icon={icons.Continue} color={"#fff"} borderColor={this.context.bgGray} action={()=> null} />
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
    },
});

export { Reg_EasyLearn };
