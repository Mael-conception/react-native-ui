import React, { useState } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import Icon from '../buttons/Icon'; 
import Styles from './checkbox.styles';

const CheckBox = ({ label, initialChecked = false, onChange, checkboxPosition = 'left', theme, shape = 'square', width }) => {
  const [isChecked, setIsChecked] = useState(initialChecked);
  const styles = Styles(theme, isChecked, width);

  const handlePress = () => {
    const newChecked = !isChecked;
    setIsChecked(newChecked);
    if (onChange) {
      onChange(newChecked);
    }
  };

  const getIconName = () => {
    if (shape === 'circle') {
      return isChecked ? 'checkbox-marked-circle' : 'checkbox-blank-circle-outline';
    }
    return isChecked ? 'checkbox-marked' : 'checkbox-blank-outline';
  };

  return (
    <TouchableOpacity
      style={checkboxPosition === 'left' ? styles.containerLeft : styles.containerRight}
      onPress={handlePress}
    >
      {checkboxPosition === 'left' && (
        <Icon onPress={handlePress} iconName={getIconName()} size={30} color={isChecked ? theme.primary : theme.IconColor} style={styles.icon} />
      )}
      <Text style={styles.text}>{label}</Text>
      {checkboxPosition === 'right' && (
        <Icon onPress={handlePress} iconName={getIconName()} size={30} color={isChecked ? theme.primary : theme.IconColor} style={styles.icon} />
      )}
    </TouchableOpacity>
  );
};

export default CheckBox;
