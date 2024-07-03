import { StyleSheet } from 'react-native';

const settingScreenStyles = (theme) => StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: 42,
        paddingHorizontal: 24,
        backgroundColor: theme.background,
        gap:16,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        color: theme.text,
        paddingVertical: 16,
        marginHorizontal: 16,

    },
    switchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 10,

    },
    dropdownContainer: {
        marginBottom: 20,
    },
    labelContainer: {
        marginBottom: 10,
        color: theme.text,
        
    },
    label: {
        fontSize: 18,
        fontWeight: 'bold',
        color: theme.text,
        marginBottom: 10,
        marginHorizontal: 16,
    },
});

export default settingScreenStyles;
