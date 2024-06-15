// Icon.js
import React from 'react';
import { TouchableOpacity } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useTheme } from '../../context/ThemeContext';
import Styles from '../../styles/Icon.styles';

const Icon = ({ iconName, focused, accessibilityLabel, onPress, style, color }) => {
  const { theme } = useTheme();
  const styles = Styles(theme);

  return (
    <TouchableOpacity
      style={[styles.tabBarIcon, focused && styles.tabBarIconHighlighted, style]}
      accessibilityLabel={accessibilityLabel}
      onPress={onPress}
    >
      <MaterialIcons 
        name={iconName} 
        size={24} 
        color={focused ? '#ffffff' : (color || theme.text)} 
      />
    </TouchableOpacity>
  );
};

export default Icon;