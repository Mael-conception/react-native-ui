import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import Icon from '../components/Icon';
import { useTheme } from '../../context/ThemeContext';
import radioStyles from '../../styles/radio.styles';

const RadioButton = ({ label, selected, onPress }) => {
  const { theme } = useTheme();
  const styles = radioStyles(theme);

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Icon
        iconName={selected ? "radio-button-checked" : "radio-button-unchecked"}
        size="medium"
        color={selected ? theme.primary : theme.text}
      />
      {label && <Text style={styles.label}>{label}</Text>}
    </TouchableOpacity>
  );
};

export default RadioButton;
