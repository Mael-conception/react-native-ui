// commonStyles.js
import { StyleSheet } from 'react-native';
import Typography from '../styles/Typography';

const commonStyles = (theme) => StyleSheet.create({

  // Font size

  textSmall: {
    ...Typography.smallText,
  },
  textMedium: {
    ...Typography.mediumText,
  },
  textLarge: {
    ...Typography.largeText,
  },

  // Width 

  widthSmall: {
    width: '30%',
  },
  widthMedium: {
    width: '70%',
  },
  widthLarge: {
    width: '100%',
  },

  // Border radius

  roundedSmall: {
    borderRadius: 12,
  },
  roundedMedium: {
    borderRadius: 16,
  },
  roundedLarge: {
    borderRadius: 24,
  },
  roundedFull: {
    borderRadius: 9999,
  },

  // Colors

  primary: {
    backgroundColor: theme.primary,
    color: theme.primary,
    borderColor: theme.primary,
  },
  secondary: {
    backgroundColor: theme.secondary,
    color: theme.secondary,
    borderColor: theme.secondary,
  },
  danger: {
    backgroundColor: theme.danger,
    color: theme.danger,
    borderColor: theme.danger,
  },
  warning: {
    backgroundColor: theme.warning,
    color: theme.warning,
    borderColor: theme.warning,
  },
  success: {
    backgroundColor: theme.success,
    color: theme.success,
    borderColor: theme.success,
  },
  disabled: {
    backgroundColor: theme.disabledBackground,
    color: theme.disabledBackground,
    borderColor: theme.disabledBackground,
  },

  // Text color

  text: {
    color: theme.text,
  },
  btnText : {
    color: theme.btnText,

  },
  // Border style

  borderBottom: {
    borderBottomWidth: 1,
    borderBottomColor: theme.border,
  },

  fullBorder: {
    borderWidth: 1,
    borderColor: theme.border,
    borderRadius: 4,
  },

  borderRounded: {
    borderWidth: 1,
    borderColor: theme.border,
    borderRadius: 30,
  },
  shadow: {
    shadowColor: theme.shadowColor,
    // shadowOffset: { width: 0, height: 0.5 },
    // shadowOpacity: 0.8,
    // shadowRadius: 2,
    elevation: 5,
  
  },

  // Checked background
  checkedBackground: {
    backgroundColor: theme.border,
  },
});

export default commonStyles;