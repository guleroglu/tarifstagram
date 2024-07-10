import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeScreen, ProfileScreen, FavoriteRecipes } from "../screen";
import { NavigationContainer } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import { Text } from "react-native";
import AddRecipeStack from "./AddRecipeStack";

const Tab = createBottomTabNavigator();

export default function UserStack() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarLabel: ({ focused }) =>
              focused ? (
                <Text className="text-[11px] text-primary font-medium">
                  Ana Sayfa
                </Text>
              ) : (
                <Text className="text-[11px] text-secondary">Ana Sayfa</Text>
              ),
            tabBarIcon: ({ focused }) =>
              focused ? (
                <AntDesign name="home" size={20} color="#00012C" />
              ) : (
                <AntDesign name="home" size={20} color="#868E96" />
              ),
          }}
        />

        <Tab.Screen
          name="Favorites"
          component={FavoriteRecipes}
          options={{
            tabBarLabel: ({ focused }) =>
              focused ? (
                <Text className="text-[11px] text-primary font-medium">
                  Favoriler
                </Text>
              ) : (
                <Text className="text-[11px] text-secondary">Favoriler</Text>
              ),
            tabBarIcon: ({ focused }) =>
              focused ? (
                <AntDesign name="hearto" size={20} color="#00012C" />
              ) : (
                <AntDesign name="hearto" size={20} color="#868E96" />
              ),
          }}
        />
        <Tab.Screen
          name="AddRecipe"
          component={AddRecipeStack}
          options={{
            tabBarLabel: ({ focused }) =>
              focused ? (
                <Text className="text-[11px] text-primary font-medium">
                  Tarif Ekle
                </Text>
              ) : (
                <Text className="text-[11px] text-secondary">Tarif Ekle</Text>
              ),
            tabBarIcon: ({ focused }) =>
              focused ? (
                <AntDesign name="plus" size={20} color="#00012C" />
              ) : (
                <AntDesign name="plus" size={20} color="#868E96" />
              ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarLabel: ({ focused }) =>
              focused ? (
                <Text className="text-[11px] text-primary font-medium">
                  Profil
                </Text>
              ) : (
                <Text className="text-[11px] text-secondary">Profil</Text>
              ),
            tabBarIcon: ({ focused }) =>
              focused ? (
                <AntDesign name="user" size={20} color="#00012C" />
              ) : (
                <AntDesign name="user" size={20} color="#868E96" />
              ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
