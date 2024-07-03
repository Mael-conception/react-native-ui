import { StyleSheet } from 'react-native';

const tabBarStyles = (theme) => StyleSheet.create({
  tabBarDefault: {
    height: 60,
    position: 'absolute',
    backgroundColor: '#F8F1D0',
    // shadowColor: '#333',
    justifyContent: 'center',
    alignItems: 'center',
    // borderWidth: 0.5,
    // borderColor: '#dadada',
    // shadowOpacity: 1,
  },
  tabBarAnimated: {
    height: 50,
    position: 'absolute',
    shadowColor: theme.shadowColor,
    justifyContent: 'center',
    alignItems: 'center',
    shadowOpacity: 1,


  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    alignSelf: 'stretch',
    backgroundColor: theme.background,
    
  },
  tab: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 4,
    borderColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  tabLabel: {
    fontSize: 12,
    fontWeight: 'bold',
    textAlign: 'center',
    color: theme.text,
    position: 'absolute',
    bottom: 10,
  },
});

export default tabBarStyles;
