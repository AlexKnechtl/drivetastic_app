import React, { Component } from 'react';
import { View, StyleSheet, Exam } from 'react-native';

class Exam extends Component {
    state = {

    }

    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <View>
                <Text>Exam</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    view: {
        flex: 1
    }
});

export { Exam };
