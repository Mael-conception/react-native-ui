import { StyleSheet } from 'react-native';
import commonStyles from '../../styles/common.style';

const ToggleStyles = (theme, isChecked) => {
  const common = commonStyles(theme);

  return StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      width:200,
      paddingVertical: 10,
      paddingHorizontal: 16,
      ...common.widthMedium,  
      ...common.borderRounded, 
      borderColor: isChecked ? theme.primary : theme.border,
      backgroundColor: isChecked ? theme.border : theme.background,
      marginBottom: 8,
    },
    label: {
      fontSize: 24,
      color: theme.text,
      textAlign: 'center',
      flex: 1, 
    },
    icon: {
      marginHorizontal: 5,
      ...common.borderRounded, 
      color:theme.border
    },
  });
};

export default ToggleStyles;
