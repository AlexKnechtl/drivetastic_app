import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';

class VisualChanges extends Component {
    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <View>
                <Text>VisualChanges</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    view: {
        flex: 1
    }
});

export { VisualChanges };
