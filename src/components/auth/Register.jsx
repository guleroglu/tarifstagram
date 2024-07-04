import {
  FlatList,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useReducer, useState } from "react";
import Input from "../shared/Input";
import Checkbox from "expo-checkbox";
import Button from "../shared/Button";
import { registerForm } from "../../utils/const/authForm";
import { inputReducer } from "../../reducer/inputReducer";

export default function Register({ navigation }) {
  const [isChecked, setChecked] = useState(false);

  const initialState = {
    name: "",
    surname: "",
    email: "",
    password: "",
    rpassword: "",
  };

  const [state, dispatch] = useReducer(inputReducer, initialState);

  return (
    <View className="bg-white flex-1 p-6">
      <View className="mt-[60px]">
        <Text className="text-primary text-2xl font-bold">
          Bir hesap oluşturun
        </Text>
        <Text className="text-tertiary mt-1 text-[13px] pr-2">
          Hesabınızı oluşturmanıza yardımcı olalım, uzun sürmeyecek.
        </Text>
      </View>

      <View className="mt-6">
        <FlatList
          data={registerForm}
          renderItem={({ item }) => (
            <View className="mt-5 w-full">
              <Input item={item} dispatch={dispatch} state={state} />
            </View>
          )}
          keyExtractor={(item) => item.id}
        />
        <View className="flex-row gap-x-1 mt-6">
          <Checkbox
            style={{ borderColor: "#FF9C00", borderRadius: 6 }}
            value={isChecked}
            onValueChange={setChecked}
            color={isChecked ? "#FF9C00" : undefined}
          />
          <Text className="text-[#FF9C00] font-semibold">
            Şartlar ve Koşulları kabul et
          </Text>
        </View>

        <View className="mt-6">
          <Button title={"Kayıt Ol"} type={"login"} />
        </View>

        <View className="mt-6 flex-row gap-x-1">
          <Text>Zaten üye misiniz?</Text>
          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <Text className="text-[#FF9C00] font-semibold">Giriş Yapın</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
