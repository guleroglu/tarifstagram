import { Image, Text, View } from "react-native";
import React from "react";

export default function RecipeCardUserInfo() {
  return (
    <View className="flex-row items-center gap-2">
      <Image
        className="w-10 h-10 rounded-full"
        source={require("../../../../assets/user.png")}
      />
      <Text className="text-primary text-[14px] font-semibold">
        Mustafa Güleroğlu
      </Text>
      <Text className="text-secondary">@guleroglu</Text>
    </View>
  );
}
