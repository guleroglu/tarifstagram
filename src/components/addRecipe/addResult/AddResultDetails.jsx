import { Text, View } from "react-native";
import React from "react";

export default function AddResultDetails({ icon, label, content }) {
  return (
    <View className="flex-col items-center gap-1 w-1/3 border-r border-tertiary">
      <View>{icon}</View>
      <Text className="text-primary text-[13px] font-semibold">{label}</Text>
      <Text className="text-primary text-[11px] font-medium">{content}</Text>
    </View>
  );
}
