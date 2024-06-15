// Form.styles.js
import { StyleSheet } from 'react-native';

const Styles = (theme) => StyleSheet.create({
    container: {
        padding: 16,
        backgroundColor: theme.background,  // Correction ici
        flex: 1,
        justifyContent: 'center',
    },
});

export default Styles;
