import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';


// eslint-disable-next-line import/extensions
import { MultiProgressBar } from './MultiProgressBar'

storiesOf('Progressbar/Multi', module).add('two bars', () => <View style={s.centerContainer}>
    <MultiProgressBar 
    progressbars={[{color: "#a00", progress: 0.3}, {color: "#0a0", progress: 0.6}]}/></View>)
    .add('two bars, other height', () => <View style={s.centerContainer}>
    <MultiProgressBar 
    progressbars={[{color: "#a00", progress: 0.3}, {color: "#0a0", progress: 0.6}]}
    barStyle={{height: 20}} /></View>)
    .add('three bars', () => <View style={s.centerContainer}>
    <MultiProgressBar 
    progressbars={
        [
            {color: "#a00", progress: 0.3}, 
            {color: "#a0a", progress: 0.8}, 
            {color: "#0a0", progress: 0.6}
        ]
    }/></View>)
    .add('multiple bars', () => <View style={s.centerContainer}>
    <MultiProgressBar 
    progressbars={
        [
            {color: "#a00", progress: 0.3}, 
            {color: "#0aa", progress: 0.4}, 
            {color: "#00a", progress: 0.1}, 
            {color: "#a0a", progress: 0.8}, 
            {color: "#0a0", progress: 0.6}
        ]
    }/></View>)
    .add('three bars with animation', () => <View style={s.centerContainer}>
    <MultiProgressBar 
    progressbars={
        [
            {color: "#a00", progress: 0.3}, 
            {color: "#a0a", progress: 0.8, animated: true}, 
            {color: "#0a0", progress: 0.6, animated: true}
        ]
    }/></View>);

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
        alignItems: "stretch"
    }
})