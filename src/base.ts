import { Dimensions } from 'react-native';

export const dimensions = {
    fullHeight: Dimensions.get('window').height,
    fullWidth: Dimensions.get('window').width
}

export const colors = {
    lightBlue: '#70B2AE',
    lightPurple: '#8F8FA4',
    lightGreen: '#83B47E',
    darkerGray: '#5B5B5B',
    middleGray: "#858585",
    softGray: '#D5D5D5',
    bgGray: '#EFEFEF'
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
