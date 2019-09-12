import React, { Component, useContext } from 'react';
import { View, StyleSheet, ScrollView, Text } from 'react-native';
import { icons } from 'icons';
import { ColoredIconHeader, LongIconButton, BereichSmall } from 'components';
import { ThemeContext } from 'base';

const TrainingView = () => {
    const colors = useContext(ThemeContext);
    return (
        <View style={styles.safeArea}>
            <ColoredIconHeader text="Training" color={colors.lightBlue} icon={icons.Training} />
            <ScrollView >
                <View style={styles.view}>
                    <Text style={styles.title}>Empfehlungen</Text>
                    {/* TODO: Implement */}
                    <LongIconButton title="Kreuzungen" text="Hier hast du Schwierigkeiten" icon={icons.Dumbbell} bgColor={colors.lightPurple} onPress={()=>null}/>
                    <LongIconButton title="Zufallstraining" text="Persönliche Dauer 15 Minuten" icon={icons.Exchange} bgColor={colors.lightGreen} onPress={()=>null}/>
                    <Text style={styles.title}>Grundwissen</Text>
                    {/* TODO: Implement all Stats of module */}
                    <BereichSmall title="Grundwissen und Allgemeine asdasd s" color={colors.lightBlue} erfolgschance={20} />
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
    },
    view: {
        flex: 1,
        padding: 14
    },
    icon: {
        width: 50,
        height: 54
    },
    title: {
        fontSize: 16,
        color: '#AFAFAF',
        marginBottom: 12,
        width: "100%",
        textAlign: "center"
    }
});

export { TrainingView };
