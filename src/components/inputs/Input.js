import React, { useState } from 'react';
import { TextInput, View, Text } from 'react-native';
import Styles from './input.style'; 
import { useTheme } from '../../context/ThemeContext'; 
import Icon from '../buttons/Icon'; 

const Input = ({ label, placeholder, error, size = 'md', disabled, variant, iconLeft, iconRight, secureTextEntry }) => {
    const { theme } = useTheme();
    const styles = Styles(theme);

    const [isSecureTextEntry, setIsSecureTextEntry] = useState(secureTextEntry);

    const toggleSecureEntry = () => {
        setIsSecureTextEntry(!isSecureTextEntry);
    };

    const visibilityIcon = isSecureTextEntry ?'eye-off-outline': 'eye-outline'  ;

    return (
        <View style={styles.container}>
            {label && <Text style={[styles.label, styles[`label${size.toUpperCase()}`]]}>{label}</Text>}
            <View style={[
                styles.inputContainer,
                styles[`inputContainer${size.toUpperCase()}`],
                styles[variant],
                disabled && styles.disabled
            ]}>
                {iconLeft && <Icon iconName={iconLeft} size={size} color={theme.text} style={styles.iconLeft} />}
                <TextInput
                    style={[styles.input, styles[`input${size.toUpperCase()}`]]}
                    placeholder={placeholder}
                    placeholderTextColor={styles.placeholder.color}
                    editable={!disabled}
                    secureTextEntry={isSecureTextEntry && secureTextEntry} 
                />
                {iconRight && (
                    <Icon
                        iconName={iconRight === 'visibility' ? visibilityIcon : iconRight}
                        size={size}
                        color={theme.text}
                        style={styles.iconRight}
                        onPress={iconRight === 'visibility' ? toggleSecureEntry : null} 
                    />
                )}
            </View>
            {error && <Text style={styles.error}>{error}</Text>}
        </View>
    );
};

export default Input;