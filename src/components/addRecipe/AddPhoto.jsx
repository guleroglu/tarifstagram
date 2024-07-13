import React, { useState } from "react";
import {
  Text,
  TouchableOpacity,
  View,
  SafeAreaView,
  ScrollView,
  Image,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import Button from "../shared/Button";
import * as ImagePicker from "expo-image-picker";
import AddPhotoErrorModal from "./AddPhotoErrorModal";

export default function AddPhoto({ navigation }) {
  const [image, setImage] = useState(null);
  const [showErrorModal, setShowErrorModal] = useState(false);

  const pickImage = async () => {
    const permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (permissionResult.granted === false) {
      setShowErrorModal(true);
      return;
    }

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const removeImage = () => {
    setImage(null);
  };

  return (
    <SafeAreaView className="bg-white flex-1">
      <ScrollView contentContainerStyle={{ flexGrow: 1, padding: 24 }}>
        <View className="mt-">
          <View className="flex-row gap-3 items-center mb-4">
            <Text className="text-[24px] text-primary">Fotoğraf Ekle</Text>
            <AntDesign name="questioncircle" size={20} color="#00012C" />
          </View>
          <Text className="text-[14px] mb-4 leading-[18px]">
            Tarifinizin görselliğiyle daha etkileyici olmasını sağlayın! Bir
            adet fotoğraf yüklemeniz gerekiyor. Buraya eklediğiniz fotoğraf,
            tarifinizin anasayfada öne çıkmasını sağlar.
          </Text>

          <TouchableOpacity
            onPress={pickImage}
            className="mt-4 mb-4 w-full h-[300px] bg-[#E6E6FA] rounded-md relative"
          >
            {image && (
              <View>
                <Image
                  className="w-full h-full rounded-md"
                  source={{ uri: image }}
                />
              </View>
            )}

            {image ? (
              <TouchableOpacity
                className="absolute right-1 top-1"
                onPress={removeImage}
              >
                <AntDesign name="closecircle" size={24} color="black" />
              </TouchableOpacity>
            ) : (
              <View className="justify-center items-center h-full flex-col gap-2">
                <AntDesign name="camera" size={24} color="#00012C" />
                <Text className="font-bold text-primary">
                  Tarifin Fotoğrafını Ekle!
                </Text>
              </View>
            )}
          </TouchableOpacity>

          <TouchableOpacity
            className={`mt-4 ${image ? "opacity-100" : "opacity-50"}`}
            onPress={() => {
              navigation.navigate("AddDetails");
            }}
          >
            <Button title={"Devam"} type={"login"} />
          </TouchableOpacity>
        </View>
      </ScrollView>
      <AddPhotoErrorModal
        visible={showErrorModal}
        onClose={() => setShowErrorModal(false)}
      />
    </SafeAreaView>
  );
}
