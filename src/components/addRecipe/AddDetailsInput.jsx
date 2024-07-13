import { StyleSheet, Text, View, TextInput } from "react-native";
import React from "react";

export default function AddDetailsInput({
  label,
  placeholder,
  value,
  onChangeText,
  maxLength,
  multiline,
  textAlignVertical,
}) {
  return (
    <View className="mb-6">
      <Text className="text-primary mb-[5px] text-[14px] font-semibold">{label}</Text>
      <TextInput
        className="border-[1px] border-border rounded-[5px] p-[10px] text-[14px]"
        style={multiline && { height: 150 }}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        multiline={multiline}
        maxLength={maxLength}
        textAlignVertical={textAlignVertical}
      />
      {maxLength && (
        <Text className="text-right mt-1 text-primary font-semibold text-[12px]">
          {value.length}/{maxLength}
        </Text>
      )}
    </View>
  );
}
