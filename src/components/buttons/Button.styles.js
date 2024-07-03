import { StyleSheet } from 'react-native';
import Typography from '../../styles/Typography';
import commonStyles from '../../styles/common.style';


const ButtonStyles = (theme) => {
    const common = commonStyles(theme);
  
    return StyleSheet.create({
      button: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
        borderRadius: 5,
        backgroundColor: theme.button,

      },
      content: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignSelf: 'center',
        // marginHorizontal: 18,
      },
      text: {
        ...common.btnText,
        alignSelf: 'center',
        justifyContent: 'center',
        // paddingLeft: 15,

      },
      textSm: {
        ...Typography.buttonTextSm,
      },
      textMd: {
        ...Typography.buttonTextMd,
      },
      textLg: {
        ...Typography.buttonTextLg,
      },
      iconLeft: {
        // margin: 5,
      },
      iconRight: {
        // margin: 5,
      },
      roundedSmall: {
        ...common.roundedSmall,
      },
      roundedFull: {
        ...common.roundedFull,
      },
      primary: {
        ...common.primary,
      },
      secondary: {
        ...common.secondary,
      },
      danger: {
        ...common.danger,
      },
      disabled: {
        ...common.disabled,
      },
      warning: {
        ...common.warning,
      },
      success: {
        ...common.success,
      },
      small: {
        ...common.widthSmall,
      },
      medium: {
        ...common.widthMedium,
      },
      large: {
        ...common.widthLarge,
      },
    });
  };
  
export default ButtonStyles;
