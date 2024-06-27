// Form.styles.js
import { StyleSheet } from 'react-native';
import commonStyles from './common.style';

const Styles = (theme) => StyleSheet.create({
    container: {
        padding: 16,
        backgroundColor: theme.background,  
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 32,
        gap:18,

    },
    card: {
        padding: 16,
        height: 200,
        // backgroundColor: theme.secondary,  
        justifyContent: 'center',
        gap:18,
        ...commonStyles.fullBorder

    },
    label: {
        fontSize: 20,
        fontWeight: 'bold',
        color: theme.text,
        marginBottom: 10,
        textAlign:'center',
        // marginHorizontal: 16,
    },
});

export default Styles;
