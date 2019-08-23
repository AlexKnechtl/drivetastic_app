import React, { Component } from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';

import DeviceInfo from "react-native-device-info"

class Exam extends Component {
    state = {
        devID: ""
    }

    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <View>
                <Text>Dev ID: {this.state.devID}</Text>
                <Button title="ShowID" onPress={()=> this.setState({devID: DeviceInfo.getUniqueID()})} />
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
