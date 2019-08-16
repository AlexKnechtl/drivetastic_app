import React, { Component, useState } from 'react';
import { StyleSheet, Image, ScrollView, SafeAreaView, Text, View } from 'react-native';

import { IconHeadline, FAB, Language } from 'components/common';
import { colors, fonts, dimensions, LANGUAGES, STANDARD_LANGUAGES } from 'base';
import { icons } from '../../icons';
import { Austria, MultiLanguage1, MultiLanguage2, Exchange, } from 'img';
import { NavigationScreenProps } from 'react-navigation';
import { DataService } from 'core/services/dataService';

const Reg_Multilanguage = ({ navigation }: NavigationScreenProps) => {
    const index = navigation.getParam("index", 0);
    const image = LANGUAGES[index].image;
    const language = LANGUAGES[index].language;
    const [selectedIndex, setSelectedIndex] = useState(-1)
    return (
        <SafeAreaView style={styles.view}>
            <ScrollView>
                <IconHeadline color={colors.lightBlue} icon={icons.AddPeople} text="Registration" />
                <Language
                    color={colors.lightBlue}
                    textColor="#fff"
                    onPress={() => null}
                    checkVisibility={true}
                    text={language}
                    icon={image} />
                <Text style={styles.title}>
                    Achtung nur multilingual lernbar!
                    </Text>
                <Text style={styles.text}>
                    Uns bei Drivetastic ist es wichtig, dass so viele Menschen wie möglich für Ihre Fahrprüfung lernen können.{"\n"}Daher untersützen wir auch Sprachen welche bei der offiziellen theoretischen Prüfung nicht angeboten werden.
                    </Text>
                <Image style={styles.icon} source={MultiLanguage1} />
                <Text style={styles.title}>Unser Multilingualmodus</Text>
                <Text style={styles.text}>Mit unserem Multilingualem Lernmodus kannst du mit deiner Sprache trotz Nichtunterstüzung in der offiziellen Prüfung lernen.{"\n"}Mit diesem Modus kannst du alle Fragen einfach in einer zweiten Prüfungssprache deiner Wahl anzeigen lassen.</Text>
                <View style={{flexDirection: "row", justifyContent: "center"}}>
                    <Image style={styles.icon3} source={image} />
                    <Image style={styles.icon2} source={Exchange} />
                    <Image style={styles.icon3} source={selectedIndex == -1 ? Austria : STANDARD_LANGUAGES[selectedIndex].image} />
                </View>
                {STANDARD_LANGUAGES.map((l, i) => {
                    const selected = i == selectedIndex;
                    return <Language
                        key={i}
                        onPress={() => setSelectedIndex(selected ? -1 : i)}
                        color={selected ? colors.lightBlue : colors.bgGray}
                        textColor={selected ? "#fff" : colors.darkerGray}
                        checkVisibility={selected}
                        text={l.language}
                        icon={l.image} />
                })}
            </ScrollView>
            <FAB marginLeft={4} icon={icons.Continue} color={"#fff"} borderColor={colors.bgGray} action={()=> {
                    selectedIndex != -1 && new DataService().setMultiLanguage(STANDARD_LANGUAGES[selectedIndex].language, language)
                    .then((v)=> navigation.navigate("tutorial"))
                    .catch((e)=>null);//TODO: Handle Error
                }}/>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    view: {
        flex: 1,
        paddingBottom: 20
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
        aspectRatio: 1.09,
        width: 65,
        marginHorizontal: 30,
        marginVertical: 25,
        alignSelf: "center"
    },
    icon3: {
        aspectRatio: 1,
        width: 65,
        marginVertical: 25,
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
