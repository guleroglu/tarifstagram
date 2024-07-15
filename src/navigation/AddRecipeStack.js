import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AddDetailsScreen, AddPhotoScreen, AddResultScreen } from "../screen";

export default function AddRecipeStack() {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      initialRouteName="AddPhoto"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="AddPhoto" component={AddPhotoScreen} />
      <Stack.Screen
        name="AddDetails"
        component={AddDetailsScreen}
        options={{ headerShown: true, headerTitle: "Tarif Bilgileri" }}
      />
      <Stack.Screen
        name="AddResult"
        component={AddResultScreen}
        options={{ headerShown: true, headerTitle: "Tarif" }}
      />
    </Stack.Navigator>
  );
}
