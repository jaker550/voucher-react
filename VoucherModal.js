import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import Modal from 'react-native-modal';

const VoucherModal = ({ isVisible, toggleModal, handleCodeSubmit }) => {
  const [enteredCode, setEnteredCode] = useState('');

  return (
    <Modal isVisible={isVisible} animationIn="slideInUp" animationOut="slideOutDown">
      <View style={styles.modalContainer}>
        {/* Modal title (1234)*/}
        <Text style={styles.modalTitle}>Enter 4-Digit Code</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          maxLength={4}
          onChangeText={(text) => setEnteredCode(text)}
        />
        {/* Button to submit the entered voucher code */}
        <TouchableOpacity style={styles.submitButton} onPress={() => handleCodeSubmit(enteredCode)}>
          <Text>Submit</Text>
        </TouchableOpacity>
        
        {/* Button to close the modal */}
        <TouchableOpacity style={styles.closeButton} onPress={toggleModal}>
          <Text>Close</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  submitButton: {
    backgroundColor: 'purple',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 10,
  },
  closeButton: {
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
});

export default VoucherModal;
