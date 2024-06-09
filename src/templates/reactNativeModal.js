
import React, { useState } from 'react';
import { Modal, View, Text, Button, StyleSheet } from 'react-native';

const ${componentName} = () => {
  const [visible, setVisible] = useState(false);

  return (
    <View>
      <Button title="Show Modal" onPress={() => setVisible(true)} />
      <Modal
        visible={visible}
        transparent={true}
        animationType="slide"
      >
        <View style={styles.modal}>
          <Text>${componentName} Component</Text>
          <Button title="Close" onPress={() => setVisible(false)} />
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
});

export default ${componentName};
