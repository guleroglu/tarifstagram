import { Text, TextInput, View, TouchableOpacity } from "react-native";
import React, { useState } from "react";

export default function Input({
  item: { title, icon, isSecure = false, secureIcon, type },
  dispatch,
  state,
}) {
  const [isVisible, setIsVisible] = useState(true);

  const handleChangeVisible = () => {
    setIsVisible(!isVisible);
  };

  const changeFormInfo = (type, value) => {
    dispatch({ type, value });
  };

  return (
    <>
      {isSecure ? (
        <View className="w-full h-14 rounded-[6px] border-[1px] border-border bg-white relative">
          <View className="absolute left-[10px] top-[17px]">{icon}</View>
          <TextInput
            className="h-full px-[37px] text-[13px]"
            secureTextEntry={isVisible}
            placeholder={title}
            selectionColor={"#343A40"}
            onChangeText={(value) => {
              changeFormInfo(type, value);
            }}
            value={state[type]}
          />
          <Text className="text-[11px] text-primary absolute -top-[8px] left-[10px] bg-white px-[10px] border-l-[1px] border-r-[1px] border-border">
            {title}
          </Text>
          <TouchableOpacity
            className="absolute right-[10px] top-[17px]"
            onPress={handleChangeVisible}
          >
            {isVisible ? secureIcon.notVisible : secureIcon.visible}
          </TouchableOpacity>
        </View>
      ) : (
        <View className="w-full h-14 rounded-[6px] border-[1px] border-border bg-white relative mt-6">
          <View className="absolute left-[10px] top-[17px]">{icon}</View>
          <TextInput
            className="h-full px-[37px] text-[13px]"
            placeholder={title}
            onChangeText={(value) => {
              changeFormInfo(type, value);
            }}
            value={state[type]}
          />
          <Text className="text-[11px] text-primary absolute -top-[8px] left-[10px] bg-white px-[10px] border-l-[1px] border-r-[1px] border-border">
            {title}
          </Text>
        </View>
      )}
    </>
  );
}
