import React, { useEffect, useRef } from 'react';
import { Animated, Text, TouchableOpacity, View, } from 'react-native';
import Icon from '../buttons/Icon';
import { useTheme } from '../../context/ThemeContext';
import tabBarStyles from '../../styles/tabBar.styles';

const AnimatedIcon = ({ item, onPress, accessibilityState }) => {
  const { theme } = useTheme();
  const styles = tabBarStyles(theme);

  const animatedValues = {
    translate: useRef(new Animated.Value(0)).current,
    scale: useRef(new Animated.Value(0)).current,
  };

  const { translate, scale } = animatedValues;

  useEffect(() => {
    handleAnimated();
  }, [accessibilityState.selected]);

  const handleAnimated = () => {
    Animated.parallel([
      Animated.timing(translate, {
        toValue: accessibilityState.selected ? 1 : 0,
        duration: 400,
        useNativeDriver: false,
      }),
      Animated.timing(scale, {
        toValue: accessibilityState.selected ? 1 : 0,
        duration: 250,
        useNativeDriver: false,
      }),
    ]).start();
  };

  const translateStyle = {
    transform: [
      {
        translateY: translate.interpolate({
          inputRange: [0, 1],
          outputRange: [0, -30],
          extrapolate: 'clamp',
        }),
      },
    ],
  };

  const scaleStyle = {
    opacity: scale.interpolate({
      inputRange: [0.5, 1],
      outputRange: [0.5, 1],
      extrapolate: 'clamp',
    }),
    transform: [
      {
        scale: scale,
      },
    ],
  };

  return (
    <View style={styles.container} >
      <TouchableOpacity accessibilityRole="button" style={styles.container} onPress={onPress}>
        <Animated.View style={[styles.tab, translateStyle]}>
          <Animated.View style={[{ width: 50, height: 50, borderRadius: 100, position: 'absolute', backgroundColor: theme.primary }, scaleStyle]} />
          <Icon iconName={item.icon} color={accessibilityState.selected ? theme.btnText : theme.IconColor} iconSize={30} />
        </Animated.View>
        <Animated.Text style={[styles.tabLabel, { opacity: scale }]}>{item.name}</Animated.Text>
      </TouchableOpacity>
    </View>
  );
};

export default AnimatedIcon;