import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";
import Header from "../components/home/Header";

export default function HomeScreen({ navigation }) {
  return (
    <SafeAreaView className="bg-white flex-1">
      <Header navigation={navigation} />
      <Text>Main</Text>
    </SafeAreaView>
  );
}
