import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { useTheme } from '../../context/ThemeContext';
import tabBarStyles from '../../styles/tabBar.styles';
import Icon from '../buttons/Icon';
import Home from '../../screens/HomeScreenExemple';
import Settings from '../../screens/SettingScreen';
import Form from '../../screens/Form';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  const { theme } = useTheme();
  const styles = tabBarStyles(theme);

  return (
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
          tabBarStyle: styles.tabBar,
        }}
      >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarShowLabel: false,
            tabBarButton: (props) => <Icon iconName="home" {...props} />,
          }}
        />
        <Tab.Screen
          name="Settings"
          component={Settings}
          options={{
            tabBarShowLabel: false,
            tabBarButton: (props) => <Icon iconName="settings" {...props} />,
          }}
        />
         <Tab.Screen
          name="Form"
          component={Form}  // Ajout du nouvel écran ici
          options={{
            tabBarShowLabel: false,
            tabBarButton: (props) => <Icon iconName="edit" {...props} />,  // Remplacer 'form' par l'icône souhaitée
          }}
        />
      </Tab.Navigator>
  );
};

export default BottomTabNavigator;
