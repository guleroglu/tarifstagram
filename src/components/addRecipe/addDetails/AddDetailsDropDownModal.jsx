import { Modal, Text, View, Pressable, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { Entypo, AntDesign } from "@expo/vector-icons";

export default function AddDetailsDropDownModal({ label }) {
  const [visible, setVisible] = useState(false);

  return (
    <View>
      <View>
        <Text className="text-[14px] font-medium mb-[2px]">{label}</Text>
        <TouchableOpacity
          className="bg-[#b197fc] w-[150px] flex-row items-center justify-between p-2 rounded-md"
          onPress={() => setVisible(true)}
        >
          <Text className="text-white">Seçiniz</Text>
          <Entypo name="chevron-down" size={24} color="white" />
        </TouchableOpacity>
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={visible}
        onRequestClose={() => {
          setVisible(!visible);
        }}
      >
        <View className=" w-full h-[300px] absolute bottom-0 rounded-t-3xl bg-red-500">
          <View className="p-5 flex-row justify-between items-center">
            <Text className="text-white">Hello world</Text>
            <TouchableOpacity onPress={() => setVisible(false)}>
              <AntDesign name="close" size={24} color="white" />
            </TouchableOpacity>
          </View>
          <View>
            <Text>Hi</Text>
          </View>
        </View>
      </Modal>
    </View>
  );
}
