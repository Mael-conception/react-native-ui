import { StyleSheet, Text, View } from "react-native";
import { useTheme } from "../context/ThemeContext";
import ThemedButton from "../components/buttons/ThemedButton";

export default function HomeScreenExemple() {
    const { theme, toggleTheme } = useTheme();

    return (
        <View style={[styles.container, { backgroundColor: theme.background }]}>
            <Text style={[styles.headerTitle, { color: theme.text }]}>I'm pied piper </Text>
            <Text style={[styles.paragraph, { color: theme.text }]}>That Pied Piper must have been joking</Text>
            <ThemedButton onPress={toggleTheme} title="Toggle Theme" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    headerTitle: {
        fontSize: 34,
        fontWeight: '700',
        marginVertical: 10
    },
    paragraph: {
        fontSize: 16,
        marginVertical: 5
    }
});