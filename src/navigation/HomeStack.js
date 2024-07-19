import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { HomeScreen, RecipeCardDetailsScreen } from "../screen";

const Stack = createNativeStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen
        name="RecipeCardDetails"
        component={RecipeCardDetailsScreen}
        options={{ headerShown: true, headerTitle: "Tarif Detayları" }}
      />
    </Stack.Navigator>
  );
}
