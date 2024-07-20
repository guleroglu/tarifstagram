import { Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import {
  Feather,
  AntDesign,
  FontAwesome5,
  FontAwesome,
} from "@expo/vector-icons";

export default function RecipeCardFooter() {
  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);

  const handleLike = () => {
    setLiked(!liked);
  };

  const handleSaved = () => {
    setSaved(!saved);
  };

  console.log(liked);

  return (
    <View className="flex-row justify-around items-center">
      <TouchableOpacity
        className="flex-row items-center gap-1"
        onPress={handleLike}
      >
        {liked ? (
          <AntDesign name="like1" size={20} color="#385BDB" />
        ) : (
          <AntDesign name="like2" size={20} color="#8392AE" />
        )}

        <Text className="text-primary text-[13px] font-semibold">33</Text>
      </TouchableOpacity>
      <TouchableOpacity className="flex-row items-center gap-1">
        <FontAwesome5 name="comment" size={20} color="#8392AE" />
        <Text className="text-primary text-[13px] font-semibold">66</Text>
      </TouchableOpacity>
      <TouchableOpacity
        className="flex-row items-center gap-1"
        onPress={handleSaved}
      >
        {saved ? (
          <FontAwesome name="bookmark" size={20} color="#00012C" />
        ) : (
          <FontAwesome name="bookmark-o" size={20} color="#8392AE" />
        )}
        <Text className="text-primary text-[13px] font-semibold">99</Text>
      </TouchableOpacity>
    </View>
  );
}
