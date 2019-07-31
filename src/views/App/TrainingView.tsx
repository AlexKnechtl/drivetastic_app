import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';

class TrainingView extends Component {
    state = {

    }

    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <View>
                <Text>TrainingView</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    view: {
        flex: 1
    }
});

export { TrainingView };
