import { Text, View } from "react-native";
import React from "react";
import Section from "../shared/Section";
import RecipeCard from "./recipeCard/RecipeCard";

export default function RecipeList() {
  return (
    <Section>
      <View>
        <RecipeCard />
        <RecipeCard />
      </View>
    </Section>
  );
}
