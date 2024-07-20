import { Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Feather, AntDesign, FontAwesome5 } from "@expo/vector-icons";
export default function RecipeCardFooter() {
  return (
    <View className="flex-row justify-around items-center">
      <TouchableOpacity className="flex-row items-center gap-1">
        <AntDesign name="like2" size={20} color="#8392AE" />
        <Text className="text-primary text-[13px] font-semibold">33</Text>
      </TouchableOpacity>
      <TouchableOpacity className="flex-row items-center gap-1">
        <FontAwesome5 name="comment" size={20} color="#8392AE" />
        <Text className="text-primary text-[13px] font-semibold">66</Text>
      </TouchableOpacity>
      <TouchableOpacity className="flex-row items-center gap-1">
        <Feather name="bookmark" size={20} color="#8392AE" />
        <Text className="text-primary text-[13px] font-semibold">99</Text>
      </TouchableOpacity>
    </View>
  );
}
