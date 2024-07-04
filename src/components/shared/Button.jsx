import { Text, View } from "react-native";
import React from "react";
import classNames from "classnames";

export default function Button({ title, type }) {
  const buttonClass = classNames({
    "bg-primary": type === "login",
    "bg-white": type === "register",
    "w-full h-14 rounded-[6px]  justify-center items-center": true,
  });

  const textStyle = classNames({
    "text-white": type === "login",
    "text-primary": type === "register",
    "text-[16px] font-bold": true,
  });

  return (
    <View className={buttonClass}>
      <Text className={textStyle}>{title}</Text>
    </View>
  );
}
