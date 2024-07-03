import { StyleSheet } from 'react-native';

const dropdownStyles = (theme) => StyleSheet.create({
    container: {
        width: '100%',
        marginBottom: 20,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingVertical: 12,
        // backgroundColor: theme.secondary,
        borderRadius: 8,
        // borderWidth: 1,
        borderColor: theme.border,
    },
    image: {
        width: 34,
        height: 34,
        marginRight: 8,
        borderRadius: 24,
    },
    label: {
        flex: 1,
        fontSize: 20,
        color: theme.text,
        marginHorizontal: 16,
    },
    icon: {
        marginLeft: 'auto',
    },
    item: {
        paddingHorizontal: 16,
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderBottomColor: theme.border,
    },
    itemText: {
        fontSize: 16,
        color: theme.text,
    },
});

export default dropdownStyles;
