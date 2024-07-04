import { Image, Text, TouchableOpacity, View, FlatList } from "react-native";
import React, { useReducer } from "react";
import Input from "../shared/Input";
import Button from "../shared/Button";
import { loginForm } from "../../utils/const/authForm";
import { inputReducer } from "../../reducer/inputReducer";

export default function Login({ navigation }) {
  const initialState = {
    email: "",
    password: "",
  };

  const [state, dispatch] = useReducer(inputReducer, initialState);
  return (
    <View className="flex-1 bg-white px-6">
      <View className="items-center mt-[60px]">
        <Image
          source={require("../../../assets/auth-logo2.png")}
          className="w-[250px] h-[170px]"
        />
      </View>

      <View className="mt-6 w-full">
        <FlatList
          data={loginForm}
          renderItem={({ item }) => (
            <View className="mt-5 w-full">
              <Input item={item} dispatch={dispatch} state={state} />
            </View>
          )}
          keyExtractor={(item) => item.id}
        />

        <TouchableOpacity className="mt-6">
          <Text className="text-[#FF9C00] text-start font-semibold">
            Şifreni mi unuttun?
          </Text>
        </TouchableOpacity>

        <TouchableOpacity className="mt-6">
          <Button title="Giriş Yap" type="login" />
        </TouchableOpacity>

        <View className="flex-row mt-6 gap-x-1">
          <Text className="text-primary">Yoksa bir hesabınız yok mu?</Text>
          <TouchableOpacity onPress={() => navigation.navigate("Register")}>
            <Text className="text-[#FF9C00] font-semibold">Kayıt Ol</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
