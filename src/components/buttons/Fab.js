import React from 'react';
import { View, StyleSheet } from 'react-native';
import Icon from '../buttons/Icon'; 

const Fab = () => {
  return (
    <View style={styles.fabContainer}>
      <Icon icon="add" onPress={() => alert('FAB Pressed')} color="primary" style={styles.fab} />
    </View>
  );
};

const styles = StyleSheet.create({
  fabContainer: {
    position: 'absolute',
    bottom: 30,
    right: 30,
  },
  fab: {
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#007BFF',
  },
});

export default Fab;
