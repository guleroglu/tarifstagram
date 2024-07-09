import { Modal } from "react-native";
import React from "react";

export default function CustomModal({
  children,
  animation,
  setModalVisible,
  modalVisible,
}) {
  return (
    <Modal
      animationType={animation}
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}
    >
      {children}
    </Modal>
  );
}
