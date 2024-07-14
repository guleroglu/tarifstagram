import { Text, View, Modal, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";

export default function AddRecipeDropDownModal({ visible, setVisible }) {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={() => {
        setVisible(false);
      }}
    >
      <TouchableOpacity
        style={styles.modalBackground}
        activeOpacity={1}
    
      >
        <View style={styles.modalContent}>
          <Text>modal</Text>
        </View>
      </TouchableOpacity>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    width: 300,
    padding: 20,
    backgroundColor: "white",
    borderRadius: 10,
  },
});
