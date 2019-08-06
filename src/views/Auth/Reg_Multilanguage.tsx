import React, { Component } from 'react';
import { StyleSheet, Image, ScrollView, SafeAreaView, Text } from 'react-native';

import { IconHeadline, FAB, Language } from 'components/common';
import { colors, fonts, dimensions } from 'base';
import { AddPeople, Continue } from '../../icons';
import { Austria, MultiLanguage1, MultiLanguage2, } from '../../img';

class Reg_Multilanguage extends Component {
    state = {
        pressed: false
    }

    render() {
        return (
            <SafeAreaView style={styles.view}>
                <ScrollView>
                    <IconHeadline color={colors.lightBlue} icon={AddPeople} text="Registration" />
                    <Language
                        color={colors.lightBlue}
                        textColor="#fff"
                        checkVisibility={1}
                        text="Deutsch"
                        icon={Austria} />
                    <Text style={styles.title}>
                        Achtung nur multilingual lernbar!
                    </Text>
                    <Text style={styles.text}>
                        Uns bei Drivetastic ist es wichtig, dass so viele Menschen wie möglich für Ihre Fahrprüfung lernen können.{"\n"}Daher untersützen wir auch Sprachen welche bei der offiziellen theoretischen Prüfung nicht angeboten werden.
                    </Text>
                    <Image style={styles.icon} source={MultiLanguage1} />
                    <Text style={styles.title}>Unser Multilingualmodus</Text>
                    <Text style={styles.text}>Mit unserem Multilingualem Lernmodus kannst du mit deiner Sprache trotz Nichtunterstüzung in der offiziellen Prüfung lernen.{"\n"}Mit diesem Modus kannst du alle Fragen einfach in einer zweiten Prüfungssprache deiner Wahl anzeigen lassen.</Text>
                    <Image style={styles.icon2} source={MultiLanguage2} />
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
    text: {
        color: colors.middleGray,
        fontSize: fonts.md,
        width: "100%",
        textAlign: "center",
        marginBottom: 4,
        paddingHorizontal: 20
    },
    icon: {
        width: "22%",
        height: (dimensions.fullWidth) * 0.22,
        marginTop: 18,
        marginBottom: 10,
        alignSelf: "center"
    },
    icon2: {
        height: 65,
        width: 65*3.42,
        marginTop: 18,
        marginBottom: 10,
        alignSelf: "center"
    },
    title: {
        color: colors.darkerGray,
        fontSize: 20,
        width: "100%",
        fontWeight: "bold",
        textAlign: "center",
        marginVertical: 8
    }
});

export { Reg_Multilanguage };
