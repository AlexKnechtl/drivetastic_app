import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';

class AccountSettings extends Component {
    state = {

    }

    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <View style={styles.view}>
                <Text>AccountSettings</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    view: {
        flex: 1
    }
});

export { AccountSettings };
