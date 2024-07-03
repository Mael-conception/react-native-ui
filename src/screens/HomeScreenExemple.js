import { StyleSheet, Text, View } from "react-native";
import { useTheme } from "../context/ThemeContext";
import ThemedButton from "../components/buttons/ThemedButton";
import Button from "../components/buttons/Button";
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import Icon from "../components/buttons/Icon";


export default function HomeScreenExample() {
    const { theme, toggleTheme } = useTheme();
  
    return (
      <View style={[styles.container, { backgroundColor: theme.background }]}>
        <Text style={[styles.headerTitle, { color: theme.text }]}>I'm pied piper</Text>
        <Text style={[styles.paragraph, { color: theme.text }]}>That Pied Piper must have been joking</Text>
        {/* <ThemedButton onPress={toggleTheme} title="Toggle Theme" /> */}
        <Button
          title="Add"
          onPress={() => {}}
          color="primary"
          width="small"
          iconLeft="plus"
          accessibilityLabel="Primary Button"
        />
         <Button
          title="Edit"
          onPress={() => {}}
          color="primary"
          width="small"
          iconLeft="pencil-outline"
          accessibilityLabel="Primary Button"
        />
        <Button
          title="Download"
          onPress={() => {}}
          color="warning"
          width="medium"
          iconLeft="download-outline"
          accessibilityLabel="Secondary Button"
          border="roundedSmall"

        />
        <Button
          title="Add to cart"
          onPress={() => {}}
          color="success"
          width="large"
          border="roundedFull"
          iconLeft="cart-variant"
          accessibilityLabel="Disabled Button"
        />
          <Button
          title="More"
          onPress={() => {}}
          color="primary"
          width="small"
          iconLeft="dots-horizontal"
          accessibilityLabel="Primary Button"
          border="roundedFull"

        />
         <Button
          title="Date"
          onPress={() => {}}
          color="primary"
          width="small"
          iconLeft="calendar"
          accessibilityLabel="ate"
          border="roundedFull"

        />
        <Button
          title="Read more"
          onPress={() => {}}
          color="danger"
          // disabled
          iconRight="chevron-right-circle-outline"
          border="roundedFull"
          // accessibilityLabel="Disabled Button"
          width="medium"
        />
        
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection:'row',
      justifyContent: 'center',
      alignItems: 'center',
      paddingVertical: 42,
      paddingHorizontal: 24,
      gap: 10,
      borderWidth: 0,
      borderColor: 'transparent',
      flexWrap: 'wrap',
    },
    headerTitle: {
      fontSize: 34,
      fontWeight: '700',
      marginVertical: 10,
    },
    paragraph: {
      fontSize: 16,
      marginVertical: 5,
    },
  });