import { StyleSheet } from 'react-native';
import commonStyles from '../../styles/common.style';

const Styles = (theme, isChecked, width) => {
  const common = commonStyles(theme);

  return StyleSheet.create({
    containerLeft: {
      ...common[width], 
      flexDirection: 'row',
      alignItems: 'center',
      paddingVertical: 10,
      paddingHorizontal: 10,
      borderColor: theme.border,
      elevation: isChecked ? 3 : 0,
      ...(isChecked && common.checkedBackground),
      ...(isChecked && common.shadow),
    },
    containerRight: {
      ...common[width], 
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingVertical: 10,
      paddingHorizontal: 10,
      borderColor: theme.border,
      elevation: isChecked ? 3 : 0,
      ...(isChecked && common.checkedBackground),
      ...(isChecked && common.shadow),
    },
    text: {
      fontSize: 16,
      color: theme.text,
      marginHorizontal: 5,

    },
    icon: {
      marginHorizontal: 5,
    },
  });
};

export default Styles;
