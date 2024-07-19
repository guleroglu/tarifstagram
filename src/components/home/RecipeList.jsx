import { Text, View } from "react-native";
import React from "react";
import Section from "../shared/Section";
import RecipeCard from "./recipeCard/RecipeCard";

export default function RecipeList({ navigation }) {
  return (
    <Section>
      <View>
        <RecipeCard navigation={navigation} />
        <RecipeCard navigation={navigation} />
      </View>
    </Section>
  );
}
