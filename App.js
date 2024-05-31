import { SafeAreaProvider, initialWindowMetrics } from 'react-native-safe-area-context';
import HomeScreenExemple from './src/screens/HomeScreenExemple';
import { ThemeProvider } from './src/context/ThemeContext';

export default function App() {
  return (
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      <ThemeProvider>
        <HomeScreenExemple />
      </ThemeProvider>
    </SafeAreaProvider>
  );
}
