import { StyleSheet, Text, View } from "react-native";
import { useTheme } from "../context/ThemeContext";
import ThemedButton from "../components/buttons/ThemedButton";
import Button from "../components/buttons/Button";
import IconButton from "../components/buttons/IconButton";
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import Icon from "../components/buttons/Icon";

export default function SettingScreen() {
    const { theme, toggleTheme } = useTheme();

    return (
        <View style={[styles.container, { backgroundColor: theme.background }]}>
            <Text style={[styles.headerTitle, { color: theme.text }]}>I'm pied piper </Text>
            <Text style={[styles.paragraph, { color: theme.text }]}>That Pied Piper must have been joking</Text>
            <ThemedButton onPress={toggleTheme} title="Toggle Theme" />
            <Button
                title="Primary Button"
                onPress={""}
                border="rounded"
                color="primary"
                width="sm"
            />
            <Button
                title="Secondary Button"
                onPress={""}
                border="rounded"
                color="danger"
                width="md"
                iconRight="arrow-forward"
            />
             <Button
                title="Secondary Button"
                onPress={""}
                border="roundedFull"
                color="danger"
                width="lg"
                iconLeft="warning"
                loading={false}

            />
           
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal : 24,
        gap:10     
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