import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SwitchView, FAB } from 'components';
import { colors } from 'base';
import { NavigationScreenProps } from 'react-navigation';
import { icons } from 'icons';

class VisualChanges extends Component<NavigationScreenProps> {
    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <View style={styles.view}>
                <Text style={styles.title}>Optische Anpassungen</Text> 
                <SwitchView textColor={colors.darkerGray} bgColor={colors.bgGray} title="Dunkler Modus"  />
                <SwitchView textColor={colors.darkerGray} bgColor={colors.bgGray} title="Deuteranopie Modus"  />
                <SwitchView textColor={colors.darkerGray} bgColor={colors.bgGray} title="Protonapie Modus"  />
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

export { VisualChanges };
