import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ProfileScreen, FavoriteRecipes } from "../screen";
import { NavigationContainer } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import AddRecipeStack from "./AddRecipeStack";
import HomeStack from "./HomeStack";
import { View } from "react-native";

const Tab = createBottomTabNavigator();

export default function UserStack() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarShowLabel: false,
          headerShown: false,
          tabBarStyle: {
            backgroundColor: "#F7F6FB",
            height: 60,
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
          },
        }}
      >
        <Tab.Screen
          name="HomeScreen"
          component={HomeStack}
          options={{
            tabBarIcon: ({ focused }) =>
              focused ? (
                <View className="items-center ">
                  <View className="w-[4px] h-[4px] rounded-full bg-primary absolute bottom-[30px]"></View>
                  <AntDesign name="home" size={24} color="#00012C" />
                </View>
              ) : (
                <AntDesign name="home" size={24} color="#8392AE" />
              ),
          }}
        />

        <Tab.Screen
          name="Favorites"
          component={FavoriteRecipes}
          options={{
            tabBarIcon: ({ focused }) =>
              focused ? (
                <View className="items-center ">
                  <View className="w-[4px] h-[4px] rounded-full bg-primary absolute bottom-[30px]"></View>
                  <AntDesign name="hearto" size={24} color="#00012C" />
                </View>
              ) : (
                <AntDesign name="hearto" size={24} color="#8392AE" />
              ),
          }}
        />
        <Tab.Screen
          name="AddRecipe"
          component={AddRecipeStack}
          options={{
            tabBarIcon: ({ focused }) =>
              focused ? (
                <View className="items-center ">
                  <View className="w-[4px] h-[4px] rounded-full bg-primary absolute bottom-[30px]"></View>
                  <AntDesign name="plus" size={24} color="#00012C" />
                </View>
              ) : (
                <AntDesign name="plus" size={24} color="#8392AE" />
              ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarIcon: ({ focused }) =>
              focused ? (
                <View className="items-center ">
                  <View className="w-[4px] h-[4px] rounded-full bg-primary absolute bottom-[30px]"></View>
                  <AntDesign name="user" size={24} color="#00012C" />
                </View>
              ) : (
                <AntDesign name="user" size={24} color="#8392AE" />
              ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
