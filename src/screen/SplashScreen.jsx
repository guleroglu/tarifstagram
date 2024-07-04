import { Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import Button from "../components/shared/Button";

export default function SplashScreen({ navigation }) {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <View className="mt-[60px]">
        <Image
          className="w-[250px] h-[280px] items-center"
          source={require("../../assets/splashLogo.png")}
        />
      </View>

      <View className="mt-[60px]  items-center w-full px-[20px]">
        <Text className="text-[30px] text-primary font-bold mb-[30px]">
          Hoş geldin!
        </Text>
        <Text className="text-[14px] text-secondary tracking-wide leading-5">
          Yemek Tutkunlarının Buluştuğu Yere Hoş Geldiniz! Tariflerinizi
          Dünyayla Paylaşın ve Yeni Lezzetlerle Tanışın
        </Text>
      </View>

      <View className="mt-[60px] w-full px-[20px]">
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <Button title={"Giriş Yap"} type={"login"} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("Register")}>
          <Button title={"Kayıt Ol"} type={"register"} />
        </TouchableOpacity>
      </View>
    </View>
  );
}
