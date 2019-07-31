import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';

class ExamView extends Component {
    state = {

    }

    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <View>
                <Text>ExamView</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    view: {
        flex: 1
    }
});

export { ExamView };
