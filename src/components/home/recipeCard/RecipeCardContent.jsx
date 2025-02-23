import { Image, Text, TouchableOpacity, View } from "react-native";
import React from "react";

export default function RecipeCardContent({ navigation }) {
  return (
    <TouchableOpacity
      className="mb-6"
      onPress={() => navigation.navigate("RecipeCardDetails")}
    >
      <View>
        <Image
          className="w-full h-[300px] object-cover rounded-md"
          source={require("../../../../assets/tokat-kebabi-tarifi.jpg")}
        />
      </View>
      <View className="mt-4">
        <Text className="text-[24px] font-semibold mb-4">Tokat Kebabı</Text>
        <Text className="text-[13px]">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia
          vitae accusantium deleniti quae possimus atque hic ullam praesentium
          similique quaerat.
        </Text>
      </View>
    </TouchableOpacity>
  );
}
