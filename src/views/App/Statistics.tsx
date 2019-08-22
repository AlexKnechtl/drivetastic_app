import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { colors } from 'base';
import { ColoredIconHeader } from 'components';
import { icons } from 'icons';

class Statistics extends Component {
    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <View style={styles.safeArea}>
                <ColoredIconHeader text="Lern-Statistik" color={colors.lightGreen} icon={icons.Statistic} />
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

export { Statistics };
