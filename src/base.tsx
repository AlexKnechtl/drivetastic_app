import { Dimensions } from 'react-native';

export const dimensions = {
    fullHeight: Dimensions.get('window').height,
    fullWidth: Dimensions.get('window').width
}

export const colors = {
    lightBlue: '#70B2AE',
    lightPurple: '#8F8FA4',
    lightGreen: '#83B47E',
    darkerGray: '#5B5B5B'
}

export const padding = {
    sm: 12,
    md: 24,
    lg: 36,
    xl: 48
}

export const fonts = {
    sm: 14,
    md: 18,
    lg: 24,
    primary: 'SF UI Display'
}
