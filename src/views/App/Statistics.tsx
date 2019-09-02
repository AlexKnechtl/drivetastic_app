import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { colors } from 'base';
import { ColoredIconHeader } from 'components';
import { icons } from 'icons';

import { connect } from 'react-redux';
import { StateType, StorageFactory } from 'core';
import { NavigationScreenProps } from 'react-navigation';

const mapStateToProps = (state: StateType) => ({
    weeklySummary: state.statistics.weeklySummary
})

const mapDispatchToProps = {
}
type props = NavigationScreenProps & ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps;
const enhance = connect(mapStateToProps, mapDispatchToProps);

const Statistics = enhance(({weeklySummary} : props) => {
    var dates = Object.keys(weeklySummary).sort(); // Das sind die Daten dazu. BSP: ["2019725", "2019726", "2019727", "2019728"...]
    const dataPoints = dates.slice(dates.length-8).map(k=> weeklySummary[k]); // Das sind die einzelnen Values... Also die Fragen Pro Tag
    return (
        <View style={styles.safeArea}>
            <ColoredIconHeader text="Lern-Statistik" color={colors.lightGreen} icon={icons.Statistic} />
            <Text>{dates.slice(dates.length-8).join(" : ")}</Text>
            {dataPoints.map(d=> <Text>{d.questionsLearned}</Text>)}
        </View>
    )
})

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: "white"
    },
});

export { Statistics };
