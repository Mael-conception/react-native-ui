// Icon.styles.js
import { StyleSheet } from 'react-native';

const Styles = theme => StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    // padding: 10,
    borderRadius: 4,
  },
  colored: {
    backgroundColor: theme.primary,
  },
  background: {
    backgroundColor: theme.secondary,
  },
  light: {
    backgroundColor: theme.disabledBackground,
  },
  fill: {
    backgroundColor: theme.button,
  },
  border: {
    borderWidth: 1,
    borderColor: theme.border,
  },
  disabled: {
    backgroundColor: theme.disabledBackground,
    borderColor: theme.border,
  },
 
});

export default Styles;
