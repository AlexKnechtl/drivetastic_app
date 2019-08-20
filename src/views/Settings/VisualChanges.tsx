import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';

class VisualChanges extends Component {
    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <View>
                <Text style={styles.title}>Optische Anpassungen</Text> 
            </View>
        )
    }
}

const styles = StyleSheet.create({
    view: {
        flex: 1,
        padding: 14
    },
    title: {
        fontSize: 16,
        color: '#AFAFAF',
        marginBottom: 12,
        width: "100%",
        textAlign: "center"
    }
});

export { VisualChanges };
