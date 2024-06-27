import React, { useState } from 'react';
import { View, Alert, Text } from 'react-native';
import { useTheme } from '../context/ThemeContext';
import Input from '../components/inputs/Input';
import Styles from '../styles/form.style';
import Icon from '../components/buttons/Icon';
import Button from '../components/buttons/Button'

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
            <View style={styles.card}>
                <Text style={styles.label}>Inscription</Text>
                <View>
                    <Input
                        label="Username"
                        placeholder="Enter your username"
                        size="lg"
                        variant="full"
                        iconLeft="account-outline"
                    />
                    <Input
                        label="Mot de passe"
                        placeholder="Entrez votre mot de passe"
                        iconLeft="lock-outline"
                        iconRight="visibility"
                        size="lg"
                        variant="bottom"
                        secureTextEntry
                    />
                    <Input
                        label="Email"
                        placeholder="Enter your email"
                        size="lg"
                        variant="rounded"
                        iconLeft="email-outline"
                    // error="Invalid email address"
                    />
                </View>
                <Button title="Inscription"
                    onPress={() => { }}
                    color="primary"
                    border="roundedFull"
                    width="large"
                />
            </View>
        </View>
    );
};

export default Form;