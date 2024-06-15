import { StyleSheet } from 'react-native';

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
    bottom: {
        borderBottomWidth: 1,
        borderBottomColor: theme.border,
    },
    full: {
        borderWidth: 1,
        borderColor: theme.border,
        borderRadius: 4,
    },
    rounded: {
        borderWidth: 1,
        borderColor: theme.border,
        borderRadius: 30,
    },
});

export default Styles;
