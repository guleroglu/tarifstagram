import { ScrollView, View } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import AddDetailsInput from "./AddDetailsInput";

export default function AddDetails() {
  const [recipeName, setRecipeName] = useState("");
  const [recipeSummary, setRecipeSummary] = useState("");
  const [ingredients, setIngredients] = useState("");

  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView contentContainerStyle={{ padding: 20 }}>
        <AddDetailsInput
          label="Tarif Adı*"
          placeholder="Tarif adı giriniz."
          value={recipeName}
          onChangeText={setRecipeName}
          maxLength={55}
        />
        <AddDetailsInput
          label="Tarif Özeti*"
          placeholder="Tarif özetini giriniz."
          value={recipeSummary}
          onChangeText={setRecipeSummary}
          maxLength={300}
          multiline
          textAlignVertical="top"
        />

        <AddDetailsInput
          label="Malzeme Detayları*"
          placeholder={"Malzemeleri giriniz. \n-\n-\n-\n-\n-\n-"}
          value={ingredients}
          onChangeText={setIngredients}
          multiline
          textAlignVertical="top"
        />

      
      </ScrollView>
    </SafeAreaView>
  );
}
