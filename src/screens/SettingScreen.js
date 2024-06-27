import React, { useState } from 'react';
import { View, Text, Switch, SafeAreaView } from 'react-native';
import { useTheme } from '../context/ThemeContext';
import Styles from '../styles/settingScreen.style';
import Dropdown from '../components/lists/Dropdown';

const SettingScreen = () => {
    const { theme, toggleTheme } = useTheme();
    const styles = Styles(theme);

    const [selectedOption, setSelectedOption] = useState(null);

    const options = [
        { id: 1, label: 'Option 1' },
        { id: 2, label: 'Option 2' },
        { id: 3, label: 'Option 3' },
    ];

    const handleOptionSelect = (option) => {
        setSelectedOption(option);
    };

    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: theme.background }}>
       <View style={styles.container}>
            <Text style={styles.title}>Settings</Text>

            <View style={styles.switchContainer}>
                <Text style={styles.label}>Dark mode</Text>
                <Switch
                    value={theme === theme.dark}
                    onValueChange={toggleTheme}
                />
            </View>

            <View style={styles.dropdownContainer}>
                <Text style={styles.label}>Account</Text>
                <View style={styles.labelContainer}>
                    <Dropdown
                        imageSource={{ uri: 'https://cdn.vectorstock.com/i/1000x1000/90/54/edit-profile-icon-vector-22989054.webp' }}
                        label="Edit profile"
                        items={options}
                        onSelect={handleOptionSelect}
                    />
                </View>

                <View style={styles.labelContainer}>
                    <Dropdown
                        imageSource={{ uri: 'https://t3.ftcdn.net/jpg/04/75/01/24/240_F_475012493_x7oLL5mrWTm25OCRluB2fZkn0onfSEqu.jpg' }}
                        label="Change password"
                        items={options}
                        onSelect={handleOptionSelect}
                    />
                </View>
                <Text style={styles.label}>Settings</Text>
                <View style={styles.labelContainer}>
                    <Dropdown
                        imageSource={{ uri: 'https://png.pngtree.com/png-vector/20190505/ourmid/pngtree-vector-notification-icon-png-image_1023272.jpg' }}
                        label="Notifications"
                        items={options}
                        onSelect={handleOptionSelect}
                    />
                </View>

                <View style={styles.labelContainer}>
                    <Dropdown
                        imageSource={{ uri: 'https://w7.pngwing.com/pngs/253/714/png-transparent-logout-heroicons-ui-icon-thumbnail.png' }}
                        label="Logout"
                        items={options}
                        onSelect={handleOptionSelect}
                    />
                </View>
            </View>

            
        </View>
    </SafeAreaView>
    );
};

export default SettingScreen;
