import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';

class Home extends Component {
    state = {

    }

    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <View>
                <Text style={{fontSize: 100}}>Home</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    view: {
        flex: 1
    }
});

export { Home };
