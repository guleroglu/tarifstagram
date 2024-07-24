import { Modal, Text, TouchableOpacity, View } from "react-native";
import React from "react";

export default function RecipeCardCommentModal({
  modalVisible,
  setModalVisible,
}) {
  return (
    <Modal animationType="slide" transparent={true} visible={modalVisible}>
      <View className="bg-red-500 flex-1 absolute h-5/6 w-full bottom-0  rounded-md">
        <Text>Hello world</Text>
        <TouchableOpacity onPress={() => setModalVisible(false)}>
          <Text>Kapat</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
}
