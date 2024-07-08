import { Modal, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { AntDesign, FontAwesome5 } from "@expo/vector-icons";
export default function Header({ navigation }) {
  return (
    <View className="flex-row justify-between items-center p-[10px]">
      <View>
        <Text className="text-[20px] text-primary tracking-widest">
          tarifstagram
        </Text>
      </View>
      <View className="flex-row items-center gap-2">
        <TouchableOpacity onPress={() => navigation.navigate("AddRecipe")}>
          <AntDesign name="pluscircleo" size={20} color="#00012C" />
        </TouchableOpacity>
        <TouchableOpacity>
          <View className="relative w-[36px] h-[36px] items-center justify-center rounded-full">
            <FontAwesome5 name="bell" size={20} color="#00012C" />
            <View className="absolute top-1 right-1 bg-[#ff3200] justify-center items-center w-[13px] h-[13px] rounded-full">
              <Text className="text-[10px] text-white">1</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}
