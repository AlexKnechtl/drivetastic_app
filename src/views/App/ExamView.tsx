import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { colors } from 'base';
import { ColoredIconHeader } from 'components';
import { icons } from 'icons';

class ExamView extends Component {
    state = {

    }

    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <View style={styles.safeArea}>
                <ColoredIconHeader text="Prüfung" color={colors.lightPurple} icon={icons.Exam} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: "white"
    },
});

export { ExamView };
