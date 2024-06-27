import React from 'react';
import { TouchableOpacity, Text, View, ActivityIndicator } from 'react-native';
import { useTheme } from '../../context/ThemeContext';
import Styles from './Button.styles';
import Icon from './Icon';

const Button = ({
  title = '',
  onPress = () => {},
  style = {},
  iconLeft = null,
  iconRight = null,
  border = null,
  color = 'primary',
  disabled = false,
  loading = false,
  accessibilityLabel = '',
  width = 'large',
  iconColor = 'white',
  backgroundColor = 'transparent',
}) => {
  const { theme } = useTheme();
  const styles = Styles(theme);

  const getButtonStyles = () => {
    return [
      styles.button,
      styles[color],
      styles[border],
      styles[width],
      style,
      disabled && styles.disabled,
    ];
  };

  const buttonStyles = getButtonStyles();

  const getTextSizeStyle = () => {
    switch (width) {
      case 'small':
        return styles.textSm;
      case 'medium':
        return styles.textMd;
      case 'large':
        return styles.textLg;
      default:
        return styles.textLg; 
    }
  };

  const textStyle = [
    styles.text,
    getTextSizeStyle(),
  ];

  const getIconSize = () => {
    switch (width) {
      case 'small':
        return 16;
      case 'medium':
        return 24;
      case 'large':
        return 32;
      default:
        return 32; 
    }
  };

  const iconSize = getIconSize();

  return (
    <TouchableOpacity
      style={buttonStyles}
      onPress={!disabled ? onPress : null}
      accessibilityLabel={accessibilityLabel}
      disabled={disabled}
    >
      {loading ? (
        <ActivityIndicator color="#fff" />
      ) : (
        <View style={styles.content}>
          {iconLeft && (
            <Icon
              iconName={iconLeft}
              color={iconColor}
              size={iconSize} 
            />
          )}
          {title !== '' && <Text style={textStyle}>{title}</Text>}
          {iconRight && (
            <Icon
              iconName={iconRight}
              color={iconColor}
              size={iconSize} 
            />
          )}
        </View>
      )}
    </TouchableOpacity>
  );
};

export default Button;