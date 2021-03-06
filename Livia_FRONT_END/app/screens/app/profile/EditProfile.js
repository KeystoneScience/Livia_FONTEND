import React from "react";
import { View, Image, TouchableOpacity } from "react-native";
import UserAvatar from "react-native-user-avatar";
import AppText from "../../../components/AppText";
import colors from "../../../config/colors";
import TextInput from "../../../components/TextInput";
import AutoExpandingTextInput from "../../../components/AutoExpandingTextInput";
import * as ImagePicker from "expo-image-picker";
import * as FileSystem from "expo-file-system";
import * as ImageManipulator from "expo-image-manipulator";

var colorArray = [
  colors.secondary,
  colors.primary,
  "#2FE079",
  "#73B758",
  "#7C57E0",
  "#5A89F8",
  "#D88645",
  "#F5D647",
];

export default function ({ picture, username, name, website, bio }) {
  const [selectedImage, setSelectedImage] = React.useState(picture);

  let openImagePickerAsync = async () => {
    let permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("Permission to access camera roll is required!");
      return;
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync();

    if (pickerResult.cancelled === true) {
      return;
    }

    const smallerSize = Math.min(pickerResult.width, pickerResult.height);

    const cropResult = await ImageManipulator.manipulateAsync(
      pickerResult.uri,
      [
        {
          crop: {
            originX: 0,
            originY: 0,
            width: smallerSize,
            height: smallerSize,
          },
        },
      ],
      { format: "jpeg" }
    );

    const resizeResult = await ImageManipulator.manipulateAsync(
      cropResult.uri,
      [{ resize: { width: 500, height: 500 } }],
      { format: "jpeg" }
    );
    const base64 = await FileSystem.readAsStringAsync(resizeResult.uri, {
      encoding: "base64",
    });
    console.log(base64.length)
    setSelectedImage({ localUri: resizeResult.uri });
  };

  return (
    <View style={{ display: "flex", flexDirection: "column" }}>
      <View
        style={{
          margin: 10,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TouchableOpacity
          onPress={() => {
            openImagePickerAsync();
          }}
        >
          {selectedImage ? (
            <Image
              style={{
                height: 100,
                width: 100,
                borderRadius: 50,
              }}
              source={
                selectedImage.localUri
                  ? { uri: selectedImage.localUri }
                  : { uri: selectedImage }
              }
            />
          ) : (
            <UserAvatar
              size={100}
              name={name}
              bgColor={colorArray[name.length % 6]}
            />
          )}
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            openImagePickerAsync();
          }}
        >
          <AppText style={{ fontWeight: "500", color: colors.blue }}>
            Change Profile Picture
          </AppText>
        </TouchableOpacity>
      </View>
      <View
        style={{
          paddingTop: 40,
          marginBottom: 15,
          borderWidth: 0,
          borderBottomWidth: 1,
          borderColor: colors.gray,
        }}
      ></View>
      <TextInput placeHolder="Name" />
      <TextInput placeHolder="Website" />
      <View
        style={{ display: "flex", flexDirection: "row", paddingBottom: 10 }}
      >
        <View style={{ width: 100, marginLeft: 20 }}>
          <AppText style={{ fontSize: 14 }}>{"Bio"}</AppText>
        </View>
        <View
          style={{
            borderBottomWidth: 1,
            borderBottomColor: colors.grey,
            marginRight: 100,
            width: 250,
          }}
        >
          <AutoExpandingTextInput />
        </View>
      </View>

      <View
        style={{
          paddingBottom: 40,
          marginTop: 15,
          borderWidth: 0,
          borderTopWidth: 1,
          borderColor: colors.gray,
        }}
      ></View>
    </View>
  );
}
