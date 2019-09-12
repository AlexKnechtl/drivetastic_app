import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { ModuleProgress } from './ModuleProgress';


// eslint-disable-next-line import/extensions


storiesOf('Progressbar/ModuleProgress', module).add('example', () => <View style={s.centerContainer}>
    <ModuleProgress text1="Test text" percentage={0.5}/></View>)

// storiesOf('Button', module)
//   .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
//   .add('with text', () => (
//     <Button onPress={action('clicked-text')}>
//       <Text>Hello Button</Text>
//     </Button>
//   ))
//   .add('with some emoji', () => (
//     <Button onPress={action('clicked-emoji')}>
//       <Text>😀 😎 👍 💯</Text>
//     </Button>
//   ));

const s = StyleSheet.create({
    centerContainer:{
        flex: 1,
        justifyContent: "center",
        alignItems: "stretch",
        backgroundColor: "#555"
    }
})