import { Text, View, TouchableOpacity } from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import React, { useState } from "react";

export default function Notification({ setModalVisible }) {
  return (
    <View className="bg-[#343a4080] w-full h-full">
      <View className="w-80 h-full bg-white absolute right-0">
        <View className="p-[10px]">
          <Text className="text-primary text-[16px] font-medium">
            Duyurular
          </Text>
          <TouchableOpacity
            className="w-[32px] h-[32px]  rounded-full justify-center items-center bg-[#f8f9fa] absolute top-[10px] right-[10px]"
            onPress={() => setModalVisible(false)}
          >
            <Ionicons name="close" size={20} color="#343440" />
          </TouchableOpacity>

          <View className="mt-5">
            <TouchableOpacity className="mt-[10px] bg-[#f8f9fa] flex-row justify-between items-center p-[10px]">
              <View className="flex-row gap-[7px] items-center">
                <MaterialIcons
                  name="local-post-office"
                  size={20}
                  color="#343440"
                />
                <View>
                  <Text className="text-primary text-[13px]">
                    Yeni Güncelleme Geldi
                  </Text>
                  <Text className="text-secondary text-[10px] mt-[3px]">
                    V1.4.3
                  </Text>
                </View>
              </View>
              <MaterialIcons name="chevron-right" size={24} color="#343440" />
            </TouchableOpacity>

            <TouchableOpacity className="mt-[10px] bg-[#f8f9fa] flex-row justify-between items-center p-[10px]">
              <View className="flex-row gap-[7px] items-center">
                <MaterialIcons
                  name="local-post-office"
                  size={20}
                  color="#343440"
                />
                <View>
                  <Text className="text-primary text-[13px]">
                    Yeni Güncelleme Geldi
                  </Text>
                  <Text className="text-secondary text-[10px] mt-[3px]">
                    V1.4.3
                  </Text>
                </View>
              </View>
              <MaterialIcons name="chevron-right" size={24} color="#343440" />
            </TouchableOpacity>

            <TouchableOpacity className="mt-[10px] bg-[#f8f9fa] flex-row justify-between items-center p-[10px]">
              <View className="flex-row gap-[7px] items-center">
                <MaterialIcons
                  name="local-post-office"
                  size={20}
                  color="#343440"
                />
                <View>
                  <Text className="text-primary text-[13px]">
                    Yeni Güncelleme Geldi
                  </Text>
                  <Text className="text-secondary text-[10px] mt-[3px]">
                    V1.4.3
                  </Text>
                </View>
              </View>
              <MaterialIcons name="chevron-right" size={24} color="#343440" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}
