import { Image, Text, View } from "react-native";
import React from "react";

export default function RecipeCardContent() {
  return (
    <View className="mb-6">
      <View className="mb-4 gap-4">
        <Text className="text-[24px] font-semibold">Tokat Kebabı</Text>
        <Text className="text-[13px]">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia
          vitae accusantium deleniti quae possimus atque hic ullam praesentium
          similique quaerat.
        </Text>
      </View>
      <View>
        <Image
          className="w-full h-[300px] object-cover rounded-md"
          source={require("../../../../assets/tokat-kebabi-tarifi.jpg")}
        />
      </View>
    </View>
  );
}
