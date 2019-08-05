import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Training, Exam } from '../../icons';
import { padding, colors } from 'base';
import { IconButton, LearnButton } from '../../components';

class Home extends Component {
    state = {

    }

    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <View>
                <LearnButton />
                <View style={styles.buttonLayout}>
                    <IconButton color={colors.lightBlue} icon={Training} text="Training" />
                    <IconButton color={colors.lightPurple} icon={Exam} text="Prüfung" />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    view: {
        flex: 1
    },
    buttonLayout: {
        flexDirection: "row",
        width: "100%",
        height: 150,
        padding: padding.sm
    },
});

export { Home };
