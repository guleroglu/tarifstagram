import { Image, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import RecipeCardHeader from "./RecipeCardHeader";
import RecipeCardContent from "./RecipeCardContent";
import RecipeCardFooter from "./RecipeCardFooter";

export default function RecipeCard() {
  return (
    <View className="bg-white rounded-md w-full p-[10px] mb-4">
      <RecipeCardHeader />
      <RecipeCardContent />
      <RecipeCardFooter />
    </View>
  );
}
