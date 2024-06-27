import { StyleSheet } from 'react-native';
import commonStyles from '../../styles/common.style';

const IconStyles = (theme) => {
  const common = commonStyles(theme);

  return StyleSheet.create({
    button: {
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 4,
      marginHorizontal: 4,
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
      // borderWidth: 1,
      // borderColor: theme.border,
    },
    disabled: {
      backgroundColor: theme.disabledBackground,
      borderColor: theme.border,
    },
    tabBarIconHighlighted: {
      backgroundColor: theme.buttonHover,
      elevation: 10,
    },
    small: {
      width: 22,
      height: 16,
    },
    medium: {
      width: 28,
      height: 24,
    },
    large: {
      width: 32,
      height: 32,
    },
  });
};

export default IconStyles;