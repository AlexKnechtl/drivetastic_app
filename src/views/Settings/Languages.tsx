import React, { Component, useState } from 'react';
import { View, StyleSheet, Text, Animated } from 'react-native';
import { FAB, Language } from 'components';
import { icons } from 'icons';
import { colors, LANGUAGES } from 'base';
import { NavigationScreenProps } from 'react-navigation';

const Languages = ({ navigation }: NavigationScreenProps) => {
    const [selectedIndex, setSelectedIndex] = useState(-1); //TODO: Save and load languages (Also MultiLanguage)
    return (
        <View style={styles.view}>
            <Text style={styles.title}>Sprache auswählen</Text>
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
            <FAB action={() => { navigation.navigate("AccountView") }} rotation={180} marginRight={6} icon={icons.Continue} color={"#fff"} borderColor={colors.bgGray} />
        </View>
    )
}


const styles = StyleSheet.create({
    view: {
        flex: 1,
        padding: 14
    },
    title: {
        fontSize: 16,
        color: '#AFAFAF',
        marginBottom: 12,
        width: "100%",
        textAlign: "center"
    }
});

export { Languages };
