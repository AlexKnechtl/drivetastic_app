import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';

class ExamStatistics extends Component {
    state = {

    }

    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <View>
                <Text>ExamStatistics</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    view: {
        flex: 1
    }
});

export { ExamStatistics };
