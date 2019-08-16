import React, { ReactNode, ReactChild } from 'react'
import { TouchableWithoutFeedback, Keyboard, SafeAreaView } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';


export const DismissKeyboard = ({ children }:any) => (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <SafeAreaView style={{flex: 1}}>
            {children}
        </SafeAreaView>
    </TouchableWithoutFeedback>
);