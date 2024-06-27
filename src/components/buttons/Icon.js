import React from 'react';
import { TouchableWithoutFeedback, View } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useTheme } from '../../context/ThemeContext';
import Styles from './Icon.styles';

const Icon = ({
  iconName,
  size = 'medium',
  color = 'default',
  onPress,
  accessibilityLabel,
  style = {},
  backgroundColor = 'transparent',
}) => {
  const { theme } = useTheme();
  const styles = Styles(theme);

  const iconSizeStyle = styles[size] || styles.medium;

  const buttonStyles = [
    styles.button,
    { backgroundColor },
    style,
  ];

  return (
    <TouchableWithoutFeedback onPress={onPress} accessibilityLabel={accessibilityLabel}>
      <View style={buttonStyles}>
        <MaterialCommunityIcons
          name={iconName}
          size={iconSizeStyle.width}
          color={color === 'default' ? theme.text : color}
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Icon;
