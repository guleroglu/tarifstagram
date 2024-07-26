import { Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Entypo, Feather } from "@expo/vector-icons";

export default function RecipeCardCommentHeader({ setModalVisible }) {
  return (
    <View>
      <View className="flex-row items-center">
        <TouchableOpacity onPress={() => setModalVisible(false)}>
          <Entypo name="chevron-small-left" size={24} color="#8392AE" />
        </TouchableOpacity>
        <Text className="text-primary text-[14px] font-semibold">12 Yorum</Text>
      </View>
    </View>
  );
}
