// FormScreen.js
import React, { useState } from 'react';
import { View, Button, Alert } from 'react-native';
import { useTheme } from '../context/ThemeContext';
import Input from '../components/inputs/Input';
import Styles from '../styles/form.style';
import Icon from '../components/buttons/Icon';

const Form = () => {
    const { theme } = useTheme();
    const styles = Styles(theme);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const handleSubmit = () => {
        let valid = true;

        if (!email.includes('@')) {
            setEmailError('Invalid email address');
            valid = false;
        } else {
            setEmailError('');
        }

        if (password.length < 6) {
            setPasswordError('Password must be at least 6 characters');
            valid = false;
        } else {
            setPasswordError('');
        }

        if (valid) {
            Alert.alert('Form submitted', `Email: ${email}\nPassword: ${password}`);
        }
    };

    return (
        <View style={styles.container}>
            <Input
                label="Username"
                placeholder="Enter your username"
                size="lg"
                variant="bottom"
                iconLeft={<Icon iconName="person" />} 
            />
            <Input
                label="Password"
                placeholder="Enter your password"
                size="lg"
                variant="full"
                iconLeft={<Icon iconName="lock" />}
                iconRight={<Icon iconName="visibility" />}
            />
             <Input
                label="Password"
                placeholder="Enter your password"
                size="lg"
                variant="rounded"
                iconLeft={<Icon iconName="lock" />}
                iconRight={<Icon iconName="visibility" />}
            />
        </View>
    );
};

export default Form;