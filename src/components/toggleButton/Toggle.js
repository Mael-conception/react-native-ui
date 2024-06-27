import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from '../buttons/Icon'; 
import { useTheme } from '../../context/ThemeContext';
import ToggleStyles from './Toggle.styles'; 

const Toggle = ({ 
  label, 
  isChecked, 
  onChange, 
  iconUnchecked = "plus-circle-outline", 
  iconChecked = "check", 
  colorUnchecked, 
  colorChecked 
}) => {
  const { theme } = useTheme();
  const styles = ToggleStyles(theme, isChecked);

  const handlePress = () => {
    onChange(!isChecked);
  };

  return (
    <TouchableOpacity style={styles.container} onPress={handlePress}>
      {!isChecked && (
        <Icon
          iconName={iconUnchecked}
          size="medium"
          color={colorUnchecked || theme.primary}
          onPress={handlePress}
          style={styles.icon}
        />
      )}
      <Text style={styles.label}>{label}</Text>
      {isChecked && (
        <Icon
          iconName={iconChecked}
          size="medium"
          color={colorChecked || theme.success}
          onPress={handlePress}
          style={styles.icon}
        />
      )}
    </TouchableOpacity>
  );
};

export default Toggle;
