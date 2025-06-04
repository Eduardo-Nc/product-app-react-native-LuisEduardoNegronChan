import { Dimensions, Platform } from 'react-native';

const { width, height } = Dimensions.get('window');

export const COLORS = {
    primary: "#282d36",
    secondary: "#f9e300",

    black: "#000000",
    white: "#FFFFFF",
    red: "#d60000",

    lightGray: "#f0e8e8",
    placeholder: "#9B9B9B",
    modalBackground: 'rgba(0, 0, 0, 0.6)',
}


export const SIZES = {
    width,
    height
}

export const isAndroid = Platform.OS === 'android';

export const isIOS = Platform.OS === 'ios';