import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal } from 'react-native';
import Colors from '../Utils/Colors';

const SlideUpView = ({ isVisible, onClose }) => {
  return (
    <Modal
      visible={isVisible}
      animationType='slide'
      backdropOpacity={0.5}
      transparent={true}
      onRequestClose={onClose}
    >
    <View style={styles.modal}>
      <View style={styles.container}>
        <TouchableOpacity style={styles.closeButton} onPress={onClose}>
          <Text style={styles.closeButtonText}>Close</Text>
        </TouchableOpacity>
        <Text style={styles.contentText}>This is a slide-up view!</Text>
      </View>
    </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    justifyContent: 'flex-end'
  },
  container: {
    backgroundColor: Colors.BACKGROUND,
    padding: 16,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    elevation: 20,
    height: 600,
  },
  closeButton: {
    alignSelf: 'flex-end',
    padding: 8,
  },
  closeButtonText: {
    color: 'blue',
    fontWeight: 'bold',
  },
  contentText: {
    fontSize: 16,
    marginTop: 8,
  },
});

export default SlideUpView;
