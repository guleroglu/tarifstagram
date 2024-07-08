import { Text, View } from "react-native";
import React from "react";
import RecipeCard from "./RecipeCard";
import Section from "../shared/Section";

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
