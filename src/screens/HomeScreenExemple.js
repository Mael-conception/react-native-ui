import { Image, StyleSheet, Text, TouchableOpacity, View, ScrollView, StatusBar } from "react-native";
import { useTheme } from "../context/ThemeContext";
import Button from "../components/buttons/Button";
import { MaterialIcons, Feather } from '@expo/vector-icons';

export default function HomeScreenExample() {
  const { theme, toggleTheme } = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <StatusBar barStyle={'light-content'} />
      <View style={styles.headerSection}>
        <View style={styles.headerSectionText}>
          <Text style={[styles.headerTitle, { color: theme.text }]}>Hello{"\n"}John Doe.</Text>
          <Text style={styles.headerSubtitle}>johndoe@modernreactnativeui.io</Text>
        </View>
        <View style={styles.headerSectionAvatar}>
          <Image style={[styles.avatar, { borderColor: theme.border }]} source={require('../assets/illustrations/undraw_Male_avatar_g98d.png')} />
        </View>
      </View>

      <ScrollView style={styles.componentsSection}>
        <Text style={[styles.componentsSectionTitle, { color: theme.text }]}>Buttons</Text>
        <View style={styles.componentsSectionList}>
          <View style={[styles.componentsItem, { width: '50%' }]}>
            <Button
              title="Add"
              onPress={() => { }}
              color="primary"
              width="small"
              iconLeft="plus"
              accessibilityLabel="Primary Button"
            />
          </View>
          <View style={[styles.componentsItem, { width: '50%' }]}>
            <Button
              title="Download"
              onPress={() => { }}
              color="warning"
              width="medium"
              iconLeft="download-outline"
              accessibilityLabel="Secondary Button"
              border="roundedSmall"

            />
          </View>
          <View style={[styles.componentsItem, { width: '100%' }]}>
            <Button
              title="Add to cart"
              onPress={() => { }}
              color="success"
              width="large"
              border="roundedFull"
              iconLeft="cart-variant"
              accessibilityLabel="Disabled Button"
            />
          </View>
          <View style={[styles.componentsItem, { width: '50%' }]}>
            <Button
              title="More"
              onPress={() => { }}
              color="primary"
              width="small"
              iconLeft="dots-horizontal"
              accessibilityLabel="Primary Button"
              border="roundedFull"

            />
          </View>
          <View style={[styles.componentsItem, { width: '50%' }]}>
            <Button
              title="Date"
              onPress={() => { }}
              color="primary"
              width="small"
              iconLeft="calendar"
              accessibilityLabel="ate"
              border="roundedFull"

            />
          </View>
          <View style={[styles.componentsItem, { width: '100%' }]}>
            <Button
              title="Read more"
              onPress={() => { }}
              color="danger"
              // disabled
              iconRight="chevron-right-circle-outline"
              border="roundedFull"
              // accessibilityLabel="Disabled Button"
              width="medium"
            />
          </View>
          <View style={[styles.componentsItem, { width: '100%' }]}>
            {/*  this represents one component container, change the width to test on different dimensions */}
          </View>
        </View>
      </ScrollView>

      <TouchableOpacity style={[styles.floatingButton, { backgroundColor: theme.primary }]} onPress={toggleTheme}>
        {(theme.text === '#fff') ?
          <Feather name="sun" size={50} color={theme.text} /> :
          <MaterialIcons name="dark-mode" size={50} color={theme.text} />
        }
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 42,
    paddingHorizontal: 20,
    gap: 10,
  },
  headerSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 20,
  },
  headerSectionText: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'flex-start'
  },
  headerTitle: {
    fontSize: 38,
    fontWeight: '700',
    marginVertical: 10,
  },
  headerSubtitle: {
    fontSize: 14,
    marginVertical: 5,
    color: 'gray'
  },
  headerSectionAvatar: {
    flex: 1.5,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  avatar: {
    width: '80%',
    height: undefined,
    aspectRatio: 1,
    borderRadius: 100,
    resizeMode: 'cover',
    borderWidth: 1,
  },
  componentsSection: {
    flex: 1,
    width: '100%',
  },
  componentsSectionTitle: {
    fontSize: 28,
    fontWeight: '700',
    marginVertical: 10,
  },
  componentsSectionList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  componentsItem: {
    padding: 10,

    // border just for test the layout, to remove
    borderWidth: 3,
    borderColor: 'red',
  },


  floatingButton: {
    position: 'absolute',
    bottom: 80,
    right: 20,
    elevation: 1,
    borderRadius: 40,
    padding: 10,
  }
});