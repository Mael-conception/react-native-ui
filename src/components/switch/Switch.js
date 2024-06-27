import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import Icon from '../components/Icon';
import { useTheme } from '../../context/ThemeContext';
import switchStyles from '../../styles/switch.styles';

const Switch = ({ label, on, onPress }) => {
  const { theme } = useTheme();
  const styles = switchStyles(theme);

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={[styles.switch, on && styles.switchOn]}>
        <Icon
          iconName="circle"
          size="small"
          color={on ? theme.primary : theme.secondary}
          style={styles.icon}
        />
      </View>
      {label && <Text style={styles.label}>{label}</Text>}
    </TouchableOpacity>
  );
};

export default Switch;
