import React, { Component } from 'react';
import { View, StyleSheet, ScrollView, Text } from 'react-native';
import { colors } from 'base';
import { icons } from 'icons';
import { ColoredIconHeader, LongIconButton, BereichSmall } from 'components';

class TrainingView extends Component {
    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <View style={styles.safeArea}>
                <ColoredIconHeader text="Training" color={colors.lightBlue} icon={icons.Training} />
                <ScrollView style={{backgroundColor: "white"}}>
                    <View style={styles.view}>
                        <Text style={styles.title}>Empfehlungen</Text>
                        <LongIconButton title="Kreuzungen" text="Hier hast du Schwierigkeiten" icon={icons.Dumbbell} bgColor={colors.lightPurple}  />
                        <LongIconButton title="Zufallstraining" text="Persönliche Dauer 15 Minuten" icon={icons.Exchange} bgColor={colors.lightGreen}  />
                        <Text style={styles.title}>Grundwissen</Text>
                        <BereichSmall title="Grundwissen und Allgemeine asdasd s" color={colors.lightBlue} erfolgschance={20} />
                    </View>
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: "white"
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
