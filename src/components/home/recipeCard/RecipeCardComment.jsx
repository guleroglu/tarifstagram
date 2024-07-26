import { View } from "react-native";
import React from "react";
import RecipeCardCommentHeader from "./RecipeCardCommentHeader";

export default function RecipeCardComment({ setModalVisible }) {
  return (
    <View className="h-full w-full bg-[#f1f3f5] p-4">
      <RecipeCardCommentHeader setModalVisible={setModalVisible} />
    </View>
  );
}
