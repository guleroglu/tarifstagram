import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AddDetailsScreen, AddPhotoScreen, AddStepsScreen } from "../screen";

export default function AddRecipeStack() {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      initialRouteName="AddPhoto"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="AddPhoto" component={AddPhotoScreen} />
      <Stack.Screen name="AddDetails" component={AddDetailsScreen} />
      <Stack.Screen name="AddSteps" component={AddStepsScreen} />
    </Stack.Navigator>
  );
}
