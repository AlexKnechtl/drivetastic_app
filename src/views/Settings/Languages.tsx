import React, { Component } from 'react';
import { View, StyleSheet, Text, Animated } from 'react-native';
import { FAB } from 'components';
import { icons } from 'icons';
import { colors } from 'base';

class Languages extends Component {
    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <View style={styles.view}>
                <Text style={styles.title}>Sprache auswählen</Text>
                <FAB action={() => { this.props.navigation.navigate("AccountView") }} rotation={180} marginRight={6} icon={icons.Continue} color={"#fff"} borderColor={colors.bgGray} />
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

export { Languages };
