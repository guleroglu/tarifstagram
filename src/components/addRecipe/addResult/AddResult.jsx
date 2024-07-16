import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import RecipeCardContent from "../../home/recipeCard/RecipeCardContent";
import RecipeCardUserInfo from "../../home/recipeCard/RecipeCardUserInfo";
import AddResultDetails from "./AddResultDetails";
import { MaterialIcons, Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import Button from "../../shared/Button";

export default function addResult() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View className="p-3 bg-white">
          <View className="mb-4">
            <RecipeCardUserInfo />
          </View>
          <RecipeCardContent />
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

          <TouchableOpacity>
            <Button title="Yayınla" type="login" />
          </TouchableOpacity>

          <TouchableOpacity>
            <Button title="Düzenlemeye Geri Dön" type="register" />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
