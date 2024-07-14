import { Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { Entypo } from "@expo/vector-icons";
import AddRecipeDropDownModal from "./AddRecipeDropDownModal";

export default function AddRecipeDropDown() {
  const [visible, setVisible] = useState(false);
  return (
    <View className="flex-col gap-1">
      <Text className="text-[12px] text-primary font-semibold">
        Hazırlık Süresi*
      </Text>
      <TouchableOpacity
        className="bg-card w-[150px] flex-row justify-between items-center p-2"
        onPress={() => setVisible(true)}
      >
        <Text className="text-primary text-[13px]">Seçiniz</Text>
        <Entypo name="chevron-down" size={24} color="#00012C" />
      </TouchableOpacity>
      <AddRecipeDropDownModal visible={visible} setVisible={setVisible} />
    </View>
  );
}
