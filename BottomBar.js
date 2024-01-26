import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import VoucherModal from './VoucherModal';
import TermsAndConditionsModal from './TermsAndConditionsModal';

const BottomBar = ({ onAddVoucherPress, onAddBalance }) => {
  // State to manage the visibility of the modals
  const [isModalVisible, setModalVisible] = useState(false);
  const [isTermsModalVisible, setTermsModalVisible] = useState(false);

  // Function to toggle the voucher modal visibility
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  // Function to toggle the terms and conditions modal visibility
  const toggleTermsModal = () => {
    setTermsModalVisible(!isTermsModalVisible);
  };

  // Function to handle the logic when adding a voucher is pressed
  const handleAddVoucherPress = (voucherCode) => {
    // Check if the entered code is "1234"
    if (voucherCode === '1234') {
      // Add 10 cents to the current balance
      
      onAddBalance(0.10);
    }

    // Close the modal
    toggleModal();
  };

  return (
    <View style={styles.bottomBar}>
    {/* Button to add a voucher */}
      <TouchableOpacity style={styles.button}>
        <Text numberOfLines={1} ellipsizeMode="tail" style={styles.buttonText} onPress={toggleModal}>
          Add voucher
        </Text>
      </TouchableOpacity>
      {/* Button to view Terms & Conditions */}
      <TouchableOpacity style={styles.button}>
        <Text numberOfLines={1} ellipsizeMode="tail" style={styles.buttonText} onPress={toggleTermsModal}>
          T&Cs
        </Text>
      </TouchableOpacity>

      {/* Voucher Modal component */}
      <VoucherModal isVisible={isModalVisible} toggleModal={toggleModal} handleCodeSubmit={handleAddVoucherPress}/>

      {/* Terms and Conditions Modal component */}
      <TermsAndConditionsModal isVisible={isTermsModalVisible} toggleModal={toggleTermsModal} />
    </View>
  );
};

const styles = StyleSheet.create({
  bottomBar: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: 'purple',
    padding: 5,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  button: {
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 5,
    flex: 1,
    marginHorizontal: 5,
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 14,
  },
});

export default BottomBar;
