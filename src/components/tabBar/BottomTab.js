import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useTheme } from '../../context/ThemeContext';
import tabBarStyles from '../../styles/tabBar.styles';
import AnimatedIcon from '../animated/AnimatedIcon';
import Home from '../../screens/HomeScreenExemple';
import Settings from '../../screens/SettingScreen';
import Form from '../../screens/Form';
// import Styles from '.././buttons/Button.styles';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = ({ tabBarStyle = 'tabBarAnimated' }) => {
  const { theme } = useTheme();
  const styles = tabBarStyles(theme);

  const routes = [
    { name: 'Home', icon: 'home-outline', label: 'Home', component: Home },
    { name: 'Form', icon: 'form-select', label: 'Form', component: Form },
    { name: 'Settings', icon: 'tools', label: 'Settings', component: Settings },

  ];

  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarStyle: styles[tabBarStyle],
      }}
    >
      {routes.map(route => (
        <Tab.Screen
          key={route.name} 
          name={route.name} 
          component={route.component}
          options={{
            tabBarButton: (props) => (
              <AnimatedIcon
                item={{ icon: route.icon, name: route.label }} 
                label={route.label} 
                {...props}
              />
            ),
          }}
        />
      ))}
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
