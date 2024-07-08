import { Image, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import {
  Feather,
  AntDesign,
  FontAwesome5,
  EvilIcons,
} from "@expo/vector-icons";

export default function RecipeCard() {
  return (
    <View className="bg-white rounded-md w-full p-[10px] mb-4">
      <View className="flex-row justify-between items-center mb-4">
        <View className="flex-row items-center gap-2">
          <Image
            className="w-10 h-10 rounded-full"
            source={require("../../../assets/user.png")}
          />
          <Text className="text-primary text-[14px] font-semibold">
            Mustafa Güleroğlu
          </Text>
          <Text className="text-secondary">@guleroglu</Text>
        </View>
        <TouchableOpacity>
          <Feather name="more-horizontal" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <View className="mb-6">
        <View className="mb-4">
          <Text className="text-[30px] font-semibold">Tokat Kebabı</Text>
          <Text className="text-[13px]">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia
            vitae accusantium deleniti quae possimus atque hic ullam praesentium
            similique quaerat.
          </Text>
        </View>
        <View>
          <Image
            className="w-full h-[300px] object-cover rounded-md"
            source={require("../../../assets/tokat-kebabi-tarifi.jpg")}
          />
        </View>
      </View>
      <View className="flex-row justify-around items-center">
        <TouchableOpacity className="flex-row items-center gap-1">
          <AntDesign name="like2" size={20} color="#C9CAD0" />
          <Text className="text-primary text-[13px] font-semibold">33</Text>
        </TouchableOpacity>
        <TouchableOpacity className="flex-row items-center gap-1">
          <FontAwesome5 name="comment" size={20} color="#C9CAD0" />
          <Text className="text-primary text-[13px] font-semibold">66</Text>
        </TouchableOpacity>
        <TouchableOpacity className="flex-row items-center gap-1">
          <Feather name="bookmark" size={20} color="#C9CAD0" />
          <Text className="text-primary text-[13px] font-semibold">99</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
