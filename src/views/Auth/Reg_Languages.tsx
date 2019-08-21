import React, { useState } from 'react';
import { StyleSheet, Image, Text, SafeAreaView, Animated, StatusBar } from 'react-native';
import { IconHeadline, FAB, Language } from 'components/common';
import { colors, fonts, dimensions, LANGUAGES } from 'base';
import { icons } from '../../icons';
import { NavigationScreenProps } from 'react-navigation';
import { DataService } from 'core/services/dataService';

export const Reg_Languages = ({ navigation }: NavigationScreenProps) => {
    const [selectedIndex, setSelectedIndex] = useState(-1);
    return (
        <SafeAreaView style={styles.view}>
            <StatusBar translucent={false} />
            <IconHeadline color={colors.lightBlue} icon={icons.AddPeople} text="Registration" />
            <Image resizeMode="contain" style={styles.icon} source={icons.World} />
            <Text style={styles.text}>Wähle deine Sprache</Text>
            <Animated.ScrollView>
                {LANGUAGES.map((l, i) => {
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
            </Animated.ScrollView>
            <FAB marginLeft={4} action={() => {
                if (selectedIndex != -1) {
                    if (LANGUAGES[selectedIndex].isMultilingual)
                        navigation.navigate("multiLanguage", { index: selectedIndex })
                    else {
                        new DataService().setLanguage(LANGUAGES[selectedIndex].language)
                            .then((v) => navigation.navigate("tutorial"))
                            .catch((e) => null);//TODO: Handle Error
                    }
                }
            }} icon={icons.Continue} color={"#fff"} borderColor={colors.bgGray} />
        </SafeAreaView>
    )
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
