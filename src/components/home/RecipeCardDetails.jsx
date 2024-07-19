import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import AddResultDetails from "../addRecipe/addResult/AddResultDetails";
import { MaterialIcons, Ionicons } from "@expo/vector-icons";

export default function RecipeCardDetails() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View className="p-3 bg-white">
          <View className="mt-2 mb-4">
            <View className="flex-row items-center gap-2">
              <Image
                className="w-10 h-10 rounded-full"
                source={require("../../../assets/user.png")}
              />
              <View className="flex-col items-start">
                <Text className="text-primary text-[14px] font-semibold">
                  Mustafa Güleroğlu
                </Text>
                <Text className="text-secondary">@guleroglu</Text>
              </View>
            </View>
          </View>
          <View
            className="mb-6"
            onPress={() => navigation.navigate("RecipeCardDetails")}
          >
            <View>
              <Image
                className="w-full h-[300px] object-cover rounded-md"
                source={require("../../../assets/tokat-kebabi-tarifi.jpg")}
              />
            </View>
            <View className="mt-4">
              <Text className="text-[24px] font-semibold mb-4">
                Tokat Kebabı
              </Text>
              <Text className="text-[13px]">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Mollitia vitae accusantium deleniti quae possimus atque hic
                ullam praesentium similique quaerat.
              </Text>
            </View>
          </View>
          <View className="border-b border-border mb-4 pb-3">
            <Text className="text-primary text-[20px] font-medium text-center">
              Kategori: Ana Yemek
            </Text>
          </View>
          <View className="bg-card w-full rounded-md p-3 flex-row justify-between items-center mb-4">
            <AddResultDetails
              label="Hazırlık"
              icon={
                <MaterialIcons name="access-alarm" size={24} color="#00012C" />
              }
              content="1 saat 30dakika"
            />
            <AddResultDetails
              label="Pişirme"
              icon={
                <MaterialIcons name="soup-kitchen" size={24} color="#00012C" />
              }
              content="1 saat 23 dakika"
            />
            <AddResultDetails
              label="Porsiyon"
              icon={<Ionicons name="pizza" size={24} color="#00012C" />}
              content="1 Dilim"
            />
          </View>
          <View className="bg-card p-2 mb-4 rounded-md">
            <Text>Malzemeler</Text>
            <Text>*</Text>
            <Text>*</Text>
            <Text>*</Text>
            <Text>*</Text>
            <Text>*</Text>
            <Text>*</Text>
            <Text>*</Text>
            <Text>*</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
