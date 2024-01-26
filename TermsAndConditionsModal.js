import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Modal from 'react-native-modal';

const TermsAndConditionsModal = ({ isVisible, toggleModal }) => {
  return (
    <Modal isVisible={isVisible} animationIn="slideInUp" animationOut="slideOutDown">
      <View style={styles.modalContainer}>
        <Text style={styles.modalTitle}>Terms and Conditions</Text>
        <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tristique vitae justo id maximus. Maecenas vitae molestie mauris, id luctus nulla. Praesent at pharetra metus. Vestibulum eu varius dolor. Nam vitae neque at libero convallis mollis ac non leo. Maecenas vulputate sollicitudin quam. Curabitur eleifend est at auctor suscipit. Duis ullamcorper tincidunt interdum. Proin accumsan sit amet ligula in maximus. Cras iaculis consectetur magna, et elementum tortor vestibulum sit amet. Proin commodo nunc id ornare tristique. Cras porttitor est ullamcorper porta ultricies. Aliquam euismod aliquam facilisis. Integer gravida volutpat vestibulum.</Text>
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
  closeButton: {
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
});

export default TermsAndConditionsModal;
