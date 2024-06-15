import { StyleSheet } from 'react-native';

const tabBarStyles = (theme) => StyleSheet.create({
  tabBarDefault: {
    backgroundColor: theme.background,
    borderTopColor: theme.border,
    height: 60,
    paddingBottom: 5,
    paddingTop: 5,
  },
  tabBarLabelDefault: {
    fontSize: 12,
    fontWeight: 'bold',
  },
  // Style 1: Icônes avec badge et couleur personnalisée
  tabBarBadge: {
    backgroundColor: theme.background,
    borderTopColor: theme.border,
    height: 60,
    paddingBottom: 5,
    paddingTop: 5,
  },
  tabBarLabelBadge: {
    fontSize: 12,
    fontWeight: 'bold',
  },
  // Style 2: Barre de navigation avec coins arrondis et icônes personnalisées
  tabBarRounded: {
    backgroundColor: theme.background,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    position: 'absolute',
    height: 50,
    paddingBottom: 5,
    paddingTop: 5,
  },
  tabBarLabelRounded: {
    paddingBottom: 3,
    fontSize: 12,
    fontWeight: 'bold',
  },
  // Style 3: Icônes avec images et surbrillance
  tabBarImageHighlight: {
    backgroundColor: theme.background,
    borderTopColor: theme.border,
    height: 70,
    paddingBottom: 5,
    paddingTop: 5,
  },
  tabBarIconHighlighted: {
    position: 'absolute',
    padding: 5,
    borderRadius: 35,
    top: -65,
    backgroundColor: theme.buttonHover,
    elevation: 10,
  },
  tabBarLabelImageHighlight: {
    fontSize: 12,
    fontWeight: 'bold',
  },
});

export default tabBarStyles;
