import { Dimensions } from 'react-native';
import { Austria, English, Serbia, Turkish, Ungarn } from 'img';
export const dimensions = {
    fullHeight: Dimensions.get('window').height,
    fullWidth: Dimensions.get('window').width
}

export const colors = {
    lightBlue: '#70B2AE',
    turquoise: "#547876",
    lightPurple: '#8F8FA4',
    accentGreen: '#6AAE82',
    lightGreen: '#83B47E',
    darkerGray: '#5B5B5B',
    middleGray: "#858585",
    softGray: '#D5D5D5',
    bgGray: '#EFEFEF',
    errorRed: "#a00"
}

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

export var LANGUAGES: {language: string, image: object, isMultilingual: boolean}[] = [{
    language: "Deutsch",
    image: Austria,
    isMultilingual: false
},{
    language: "English",
    image: English,
    isMultilingual: false
},{
    language: "Serbisch",
    image: Serbia,
    isMultilingual: true
},{
    language: "Turkish",
    image: Turkish,
    isMultilingual: false
},{
    language: "Hungaria",
    image: Ungarn,
    isMultilingual: true
},{
    language: "Kroatisch",
    image: Ungarn,
    isMultilingual: false
},{
    language: "Slowenisch",
    image: Serbia,
    isMultilingual: false
}];

export var STANDARD_LANGUAGES = [{
    language: "Deutsch",
    image: Austria
},{
    language: "English",
    image: English
},{
    language: "Slowenisch",
    image: Serbia
},{
    language: "Turkish",
    image: Turkish
},{
    language: "Kroatisch",
    image: Ungarn
}];