import { StyleSheet } from 'react-native';
import Typography from './Typography';

const Styles = (theme) => StyleSheet.create({
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
        borderRadius: 5,
        backgroundColor: theme.button,
        // paddingHorizontal: 16, 
    },
    content: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 32,

    },
    
    // Text styles
    text: {
        color: theme.btnText,
        // marginHorizontal: 4,
    },
    textSm: {
        ...Typography.buttonTextSm,
    },
    textMd: {
        ...Typography.buttonTextMd,
    },
    textLg: {
        ...Typography.buttonTextLg,
    },

    // Icon styles
    iconLeft: {
        // marginRight: 8, 
    },
    iconRight: {
        // marginLeft: 8, 
    },

    // Border radius styles
    rounded: {
        borderRadius: 5,
    },
    roundedFull: {
        borderRadius: 30,
    },

    // Color styles
    primary: {
        backgroundColor: theme.primary,
    },
    secondary: {
        backgroundColor: theme.secondary,
    },
    danger: {
        backgroundColor: theme.danger,
    },
    disabled: {
        backgroundColor: theme.disabledBackground,
    },
    warning: {
        backgroundColor: theme.warning,
    },
    success: {
        backgroundColor: theme.success,
    },

    // Width styles
    sm: {
        width: '45%',
    },
    md: {
        width: '70%',
    },
    lg: {
        width: '100%',
    },
});

export default Styles;
