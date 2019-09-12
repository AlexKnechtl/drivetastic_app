import { Dimensions } from 'react-native';
import { Austria, English, Serbia, Turkish, Ungarn } from 'img';
import React from 'react';
export const dimensions = {
    fullHeight: Dimensions.get('window').height,
    fullWidth: Dimensions.get('window').width
}


export type colorType = {
    lightBlue: string,
    turquoise: string,
    lightPurple: string,
    accentGreen: string,
    lightGreen: string,
    darkerGray: string,
    middleGray: string,
    settingsGray: string,
    grundwissen: string,
    bFührerschein: string,
    alleBereiche: string,
    softGray: string,
    bgGray: string,
    errorRed: string,
    darkRed: string,
    fortschritt: string,
    fortschrittUnfilled: string,
    fortschrittDark: string,
    erfolgschance: string,
    erfolgschanceUnfilled: string,
    erfolgschanceDark: string,
    questionBG: string,
    questionSelcted: string,
    questionRight: string,
    questionWrong: string,
    questionLightRed: string,
    questionLightGreen: string,
    questionGreenAccent: string,
    questionRedAccent: string,
    mainBG: string
}


export const colorsLight: colorType = {
    lightBlue: '#70B2AE',
    turquoise: "#547876",
    lightPurple: '#9196C3',
    accentGreen: '#6AAE82',
    lightGreen: '#83B47E',
    darkerGray: '#5B5B5B',
    middleGray: "#858585",
    settingsGray: "#AFAFAF",
    grundwissen: "#AE73AB",
    bFührerschein: "#7884AE",
    alleBereiche: "#7EAC79",
    softGray: '#D5D5D5',
    bgGray: '#EFEFEF',
    errorRed: "#a00",
    darkRed: "#900",
    fortschritt: '#7EBE95',
    fortschrittUnfilled: 'rgba(126, 190, 149, 0.3)',
    fortschrittDark: '#6AAE82',
    erfolgschance: '#578E8B',
    erfolgschanceUnfilled: 'rgba(87, 142, 139, 0.3)',
    erfolgschanceDark: '#427A77',
    questionBG: "#F0F0F0",
    questionSelcted: '#BFBFBF',
    questionRight: '#2EB174',
    questionWrong: '#B85555',
    questionLightRed: 'rgba(164, 35, 35, 0.15)',
    questionLightGreen: 'rgba(46, 177, 116, 0.15)',
    questionGreenAccent: '#258056',
    questionRedAccent: '#7B1111',
    mainBG: '#D5D5D5'
}

export const colorsDark: colorType = {
    lightBlue: '#70B2AE',
    turquoise: "#547876",
    lightPurple: '#9196C3',
    accentGreen: '#6AAE82',
    lightGreen: '#83B47E',
    darkerGray: '#222',
    middleGray: "#333",
    settingsGray: "#AFAFAF",
    grundwissen: "#AE73AB",
    bFührerschein: "#7884AE",
    alleBereiche: "#7EAC79",
    softGray: '#121212',
    bgGray: '#222',
    errorRed: "#a00",
    darkRed: "#900",
    fortschritt: '#7EBE95',
    fortschrittUnfilled: 'rgba(126, 190, 149, 0.3)',
    fortschrittDark: '#6AAE82',
    erfolgschance: '#578E8B',
    erfolgschanceUnfilled: 'rgba(87, 142, 139, 0.3)',
    erfolgschanceDark: '#427A77',
    questionBG: "#000",
    questionSelcted: '#BFBFBF',
    questionRight: '#2EB174',
    questionWrong: '#B85555',
    questionLightRed: 'rgba(164, 35, 35, 0.15)',
    questionLightGreen: 'rgba(46, 177, 116, 0.15)',
    questionGreenAccent: '#258056',
    questionRedAccent: '#7B1111',
    mainBG: "#121212"
}

export const ThemeContext = React.createContext(colorsLight);

export const padding = {
    sm: 12,
    md: 24,
    lg: 36,
}

export const margin = {
    sm: 4,
    md: 8,
    lg: 12,
    xl: 18,
    xxl: 24
}

export const fonts = {
    xs: 12,
    sm: 14,
    md: 16,
    lg: 24,
    xl: 52,
    primary: 'SF UI Display'
}

export var LANGUAGES: { language: string, image: object, short: string, isMultilingual: boolean }[] = [{
    language: "Deutsch",
    short: "de",
    image: Austria,
    isMultilingual: false
}, {
    language: "English",
    short: "en",
    image: English,
    isMultilingual: false
}, {
    language: "Serbisch",
    image: Serbia,
    short: "sr",
    isMultilingual: true
}, {
    language: "Turkish",
    short: "tr",
    image: Turkish,
    isMultilingual: false
}, {
    language: "Hungaria",
    image: Ungarn,
    short: "hu",
    isMultilingual: true
}, {
    language: "Kroatisch",
    short: "hr",
    image: Ungarn,
    isMultilingual: false
}, {
    language: "Slowenisch",
    image: Serbia,
    short: "sl",
    isMultilingual: false
}];

export var STANDARD_LANGUAGES = [{
    language: "Deutsch",
    image: Austria
}, {
    language: "English",
    image: English
}, {
    language: "Slowenisch",
    image: Serbia
}, {
    language: "Turkish",
    image: Turkish
}, {
    language: "Kroatisch",
    image: Ungarn
}];