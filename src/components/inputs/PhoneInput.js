import React from 'react';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css'; 

const PhoneInput = ({ label, error, size = 'md', variant, disabled, ...props }) => {
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
                <PhoneInput
                    {...props}
                    disabled={disabled}
                    className="phone-input"
                    style={[styles.input, styles[`input${size.toUpperCase()}`]]}
                />
            </View>
            {error && <Text style={styles.error}>{error}</Text>}
        </View>
    );
};

export default PhoneInput;
