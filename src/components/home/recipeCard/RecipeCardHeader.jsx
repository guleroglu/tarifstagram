import { Image, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";
import RecipeCardUserInfo from "./RecipeCardUserInfo";

export default function RecipeCardHeader() {
  return (
    <View className="flex-row justify-between items-center mb-4">
      <RecipeCardUserInfo />
      <TouchableOpacity>
        <Feather name="more-horizontal" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
}
