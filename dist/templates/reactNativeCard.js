import React from 'react';

import { View, Text, StyleSheet } from 'react-native';


const ${componentName} = () => {
  return (
    <View style={styles.card}>
      <Text>${componentName} Component</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 10,
    margin: 10,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 5,
    borderRadius: 5,
  },
});

// @ts-ignore
export default ${componentName};
