import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ExtraScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Extra Screen for Navigation Purpose</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f9fa', 
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333', 
    textAlign: 'center',
  },
});

export default ExtraScreen;
