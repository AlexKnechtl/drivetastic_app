import React, { Component } from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import { NavigationScreenProps } from 'react-navigation';
import { FAB, Logo, LearnSpeedBtn } from 'components';
import { icons } from 'icons';
import { colors } from 'base';

class LearnAlgorithm extends Component<NavigationScreenProps> {
    state = {
        pressedSlow: false,
        pressedNormal: false,
        pressedFast: false
    }

    slowPress() {
        this.setState({ pressedSlow: !this.state.pressedSlow, pressedNormal: false, pressedFast: false });
    }

    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <View style={styles.view}>
                <Text style={styles.title}>Lernerfahrung anpassen</Text>
                <View style={styles.header}>
                    <Image style={styles.headerIcon} resizeMode="contain" source={icons.Easy_Learn} />
                    <View>
                        <Logo fontSize={18} paddingHorizontal={6} paddingVertical={2} />
                        <Text>
                            <Text style={{ color: colors.lightBlue, fontSize: 22, fontWeight: "bold" }}>Easy</Text>
                            <Text style={{ color: colors.lightBlue, fontSize: 22 }}>Learn</Text>
                        </Text>
                    </View>
                </View>
                <Text style={{ ...styles.title, fontSize: 18, color: colors.darkerGray, marginVertical: 12 }}>Deine Lerngeschwindigkeit</Text>
                <View style={{ flexDirection: "row" }}>
                        <LearnSpeedBtn
                            onPress={() => { this.setState({ pressedSlow: !this.state.pressedSlow, pressedNormal: false, pressedFast: false }) }}
                            textColor={this.state.pressedSlow ? "#fff" : colors.turquoise}
                            backgroundColor={this.state.pressedSlow ? colors.lightBlue : "#fff"}
                            icon={this.state.pressedSlow ? icons.SnailWhite : icons.Snail} text="Langsam" />
                        <LearnSpeedBtn
                            onPress={() => { this.setState({ pressedNormal: !this.state.pressedNormal, pressedSlow: false, pressedFast: false }) }}
                            textColor={this.state.pressedNormal ? "#fff" : colors.turquoise}
                            backgroundColor={this.state.pressedNormal ? colors.lightBlue : "#fff"}
                            icon={this.state.pressedNormal ? icons.DogWhite : icons.Dog} text="Normal" />
                        <LearnSpeedBtn
                            onPress={() => { this.setState({ pressedFast: !this.state.pressedFast, pressedNormal: false, pressedSlow: false }) }}
                            textColor={this.state.pressedFast ? "#fff" : colors.turquoise}
                            backgroundColor={this.state.pressedFast ? colors.lightBlue : "#fff"}
                            icon={this.state.pressedFast ? icons.CheetahWhite : icons.Cheetah} text="Schnell" />
                    </View>
                    <View style={styles.InfoView}>
                        <Image style={{ width: 18, height: 18, marginRight: 8 }} source={icons.Info} />
                        <Text style={{ fontSize: 14, color: colors.darkerGray, width: "90%" }}>Die Lerngeschwindigkeit bestimmt wie oft du Fragen zur Einprägung wiederholt bekommst.</Text>
                    </View>
                <FAB action={() => { this.props.navigation.navigate("AccountView") }} rotation={180} marginRight={6} icon={icons.Continue} color={"#fff"} borderColor={colors.bgGray} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    view: {
        flex: 1,
        padding: 14
    },
    title: {
        fontSize: 16,
        color: colors.settingsGray,
        marginBottom: 12,
        width: "100%",
        textAlign: "center"
    },
    header: {
        borderRadius: 10,
        alignSelf: "center",
        borderColor: colors.lightBlue,
        flexDirection: "row",
        borderWidth: 2,
        paddingHorizontal: 12,
        paddingVertical: 8
    },
    headerIcon: {
        width: 48,
        height: 48,
        marginRight: 12
    },
    InfoView: {
        alignSelf: "center",
        maxWidth: "80%",
        borderWidth: 2,
        borderRadius: 8,
        alignItems: "center",
        flexDirection: "row",
        paddingVertical: 4,
        paddingHorizontal: 8,
        marginTop: 12,
        borderColor: colors.middleGray
    }
});

export { LearnAlgorithm };
