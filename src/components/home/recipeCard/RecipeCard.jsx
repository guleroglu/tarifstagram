import { View } from "react-native";
import React from "react";
import RecipeCardHeader from "./RecipeCardHeader";
import RecipeCardContent from "./RecipeCardContent";
import RecipeCardFooter from "./RecipeCardFooter";

export default function RecipeCard({ navigation }) {
  return (
    <View className="bg-white rounded-md w-full p-[10px] mb-6">
      <RecipeCardHeader />
      <RecipeCardContent navigation={navigation} />
      <RecipeCardFooter />
    </View>
  );
}
