import React, { useState } from 'react'
import { View, StyleSheet, TextInput, Platform } from 'react-native';
import { fonts, colors } from 'base';

type InputProps = {
    hint: string,
    onChangeText?: (text:string)=>void,
    marginVertical?: number, 
    text?:string
}

export function MaskText(text: string, mask = "XXXX - XXXX - XXXX"){
    text = text.replace(/[\W\-_ ]/g, "").toUpperCase();
    var tmp = "";
    for (let is = 0, im = 0; (is < text.length) && im<mask.length; im++) {
        tmp += mask.charAt(im) == 'X' ? text.charAt(is++) : mask.charAt(im);
    }
    return tmp;
}

export const GreyDrivecodeInput = ({ text = "", hint, onChangeText = a=>null, marginVertical }: InputProps) => {
    const [value, setValue] = useState("");
    return (
        <View style={{ ...styles.inputContainer, marginVertical }}>
            <TextInput
                style={{ width: "100%", textAlign: "center" }}
                placeholder={hint}
                value={MaskText(text||value)}
                autoCorrect={false}
                keyboardType={Platform.OS == "ios" ? "default" : "visible-password"}
                onChangeText={(t)=> { text = ""; onChangeText(MaskText(t));}}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: "row",
        backgroundColor: colors.bgGray,
        borderRadius: 10,
        width: "100%",
        paddingHorizontal: 8,
        alignItems: "center",
        height: 50
    },
    icon: {
        height: "60%",
        width: 50,
        marginRight: 16
    },
    text: {
        color: '#fff',
        fontWeight: "bold",
        fontSize: fonts.lg,
    },
});

