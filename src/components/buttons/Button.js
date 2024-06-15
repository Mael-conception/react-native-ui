import React from 'react';
import { TouchableOpacity, Text, View, ActivityIndicator } from 'react-native';
import { useTheme } from '../../context/ThemeContext';
import Styles from '../../styles/Button.styles';
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
    width = 'lg',
    iconColor = 'white',
    iconSize = 24,
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

    const textStyle = [
        styles.text,
        styles[`text${width.charAt(0).toUpperCase() + width.slice(1)}`],
    ];

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
                            focused={false}
                            color={iconColor}
                            size={iconSize}
                            style={styles.iconLeft}
                        />
                    )}
                    {title && <Text style={textStyle}>{title}</Text>}
                    {iconRight && (
                        <Icon
                            iconName={iconRight}
                            focused={false}
                            color={iconColor}
                            size={iconSize}
                            style={styles.iconRight}
                        />
                    )}
                </View>
            )}
        </TouchableOpacity>
    );
};

export default Button;
