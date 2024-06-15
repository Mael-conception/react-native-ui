import { SafeAreaProvider, initialWindowMetrics } from 'react-native-safe-area-context';
import HomeScreenExemple from './src/screens/HomeScreenExemple';
import { ThemeProvider } from './src/context/ThemeContext';
import Fab from './src/components/buttons/Fab'
import BottomTabNavigator from './src/components/tab bar/BottomTab'
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      <ThemeProvider>
        <NavigationContainer>
        <BottomTabNavigator styleVariant="rounded" />
          <Fab onPress={() => alert('FAB Pressed')} />
        </NavigationContainer>
      </ThemeProvider>
    </SafeAreaProvider>
  );
}
