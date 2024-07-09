import { ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useState } from "react";
import Header from "../components/home/Header";
import RecipeList from "../components/home/RecipeList";

export default function HomeScreen({ navigation }) {
  return (
    <SafeAreaView className="bg-white flex-1">
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header navigation={navigation} />
        <RecipeList />
      </ScrollView>
    </SafeAreaView>
  );
}
