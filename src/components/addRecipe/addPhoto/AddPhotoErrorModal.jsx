import { Text, View, Modal } from "react-native";
import React, { useEffect } from "react";
import { AntDesign } from "@expo/vector-icons";

export default function AddPhotoErrorModal({ visible, onClose }) {
  useEffect(() => {
    if (visible) {
      const timer = setTimeout(() => {
        onClose();
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [visible]);
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View className="bg-[#19161C] m-3 p-2 items-center justify-center rounded-md">
        <View className="flex-row items-center gap-3 p-3">
          <Text className="text-white leading-5">
            Kamera izni vermelisiniz. Fotoğraf eklemek için lütfen Ayarlar {">"}{" "}
            İzinler sekmesine giderek Kamera iznini etkinleştirin.
          </Text>
          <AntDesign name="exclamationcircleo" size={20} color="#ADA0C9" />
        </View>
      </View>
    </Modal>
  );
}
