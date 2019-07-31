import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';

class Impressum extends Component {
    state = {

    }

    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <View>
                <Text>Impressum</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    view: {
        flex: 1
    }
});

export { Impressum };
