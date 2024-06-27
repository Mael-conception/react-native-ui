import { StyleSheet } from 'react-native';
import commonStyles from '../../styles/common.style';

const Styles = (theme) => StyleSheet.create({
    container: {
        marginBottom: 16,
    },
    label: {
        marginBottom: 8,
        color: theme.text,
        fontSize: 16,
    },
    labelMD: {
        fontSize: 14,
    },
    labelLG: {
        fontSize: 16,
    },
    labelSM: {
        fontSize: 12,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: theme.background,
        color: theme.text,
    },
    inputContainerMD: {
        height: 40,
    },
    inputContainerLG: {
        height: 50,
    },
    inputContainerSM: {
        height: 30,
    },
    input: {
        flex: 1,
        paddingVertical: 5,
        color: theme.text,
    },
    inputMD: {
        fontSize: 14,
    },
    inputLG: {
        fontSize: 16,
    },
    inputSM: {
        fontSize: 12,
    },
    placeholder: {
        color: theme.textSecondary,
        marginLeft: 8,

    },
    iconLeft: {
        marginRight: 5,
    },
    iconRight: {
        marginLeft: 5,
    },
    error: {
        marginTop: 8,
        color: theme.danger,
        fontSize: 12,
    },
    disabled: {
        backgroundColor: theme.disabledBackground,
    },
    // Variants 
    bottom: commonStyles(theme).borderBottom,
    full: commonStyles(theme).fullBorder,
    rounded: commonStyles(theme).borderRounded,
});

export default Styles;
