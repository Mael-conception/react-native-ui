import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, FlatList } from 'react-native';
import Icon from '../buttons/Icon';
import { useTheme } from '../../context/ThemeContext';
import getStyles from './dropdown.style';

const Dropdown = ({ imageSource, label, items = [], onSelect }) => {
    const { theme } = useTheme();
    const themedStyles = getStyles(theme);

    const [isOpen, setIsOpen] = useState(false);

    const handleDropdownPress = () => {
        setIsOpen(!isOpen);
    };

    const handleItemSelect = (item) => {
        onSelect(item);
        setIsOpen(false);
    };

    return (
        <View style={themedStyles.container}>
            <TouchableOpacity style={themedStyles.header} onPress={handleDropdownPress}>
                <Image source={imageSource} style={themedStyles.image} />
                <Text style={themedStyles.label}>{label}</Text>
                <Icon
                    iconName={isOpen ? 'chevron-up' : 'chevron-right'}
                    size={34}
                    color={theme.text}
                    style={themedStyles.icon}
                    onPress={handleDropdownPress}
                />
            </TouchableOpacity>
            {isOpen && (
                <FlatList
                    data={items}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => (
                        <TouchableOpacity
                            style={themedStyles.item}
                            onPress={() => handleItemSelect(item)}
                        >
                            <Text style={themedStyles.itemText}>{item.label}</Text>
                        </TouchableOpacity>
                    )}
                />
            )}
        </View>
    );
};

export default Dropdown;
