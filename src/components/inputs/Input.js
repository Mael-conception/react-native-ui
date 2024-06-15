import React from 'react';
import { TextInput, View, Text, TouchableOpacity } from 'react-native';
import Styles from '../../styles/input.style'; 
import { useTheme } from '../../context/ThemeContext'; 

const Input = ({ label, placeholder, error, size = 'md', disabled, variant, iconLeft, iconRight }) => {
    const { theme } = useTheme();
    const styles = Styles(theme);

    return (
        <View style={styles.container}>
            {label && <Text style={[styles.label, styles[`label${size.toUpperCase()}`]]}>{label}</Text>}
            <View style={[
                styles.inputContainer,
                styles[`inputContainer${size.toUpperCase()}`],
                styles[variant],
                disabled && styles.disabled
            ]}>
                {iconLeft && <View style={styles.iconLeft}>{iconLeft}</View>}
                <TextInput
                    style={[styles.input, styles[`input${size.toUpperCase()}`]]}
                    placeholder={placeholder}
                    placeholderTextColor={theme.textSecondary}
                    editable={!disabled}
                />
                {iconRight && <View style={styles.iconRight}>{iconRight}</View>}
            </View>
            {error && <Text style={styles.error}>{error}</Text>}
        </View>
    );
};

export default Input;
