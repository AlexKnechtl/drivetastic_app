import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';

class Account extends Component {
    state = {

    }

    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <View>
                <Text style={{fontSize: 100}}>Account</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    view: {
        flex: 1
    }
});

export { Account };
