import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
    backgroundColor: '#ffffff'
  },
  checkbox: {
    width: 24,
    height: 24,
    marginRight: 5,
    borderWidth: 2,
    borderColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  checked: {
    backgroundColor: '#000',
  },
  label: {
    fontSize: 16,
  },
  icon: {
    marginLeft: 10,
  },
});
