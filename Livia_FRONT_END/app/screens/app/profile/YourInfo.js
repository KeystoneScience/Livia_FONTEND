import React, { useRef } from "react";
import { View, Image, TouchableOpacity, Dimensions } from "react-native";
import AppText from "../../../components/AppText";
import UserAvatar from "react-native-user-avatar";
import colors from "../../../config/colors";

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

export default function ({ username, name, bio, picture, onChangePicture }) {
  const isFollowing = false;
  return (
    <View>
      <View style={{ marginTop: 25, margin: 10 }}>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            style={{ margin: 10 }}
            onPress={() => onChangePicture()}
          >
            {picture ? (
              <Image
                style={{
                  height: 100,
                  width: 100,
                  borderRadius: 50,
                }}
                source={{ uri: picture }}
              />
            ) : (
              <UserAvatar
                size={100}
                name={name}
                bgColor={colorArray[name.length % 6]}
              />
            )}
          </TouchableOpacity>

          <View
            style={{
              display: "flex",
              flexDirection: "column",
              maxHeight: 75,
              height: 75,
              position: "relative",
            }}
          >
            <AppText style={{ fontSize: 20 }}>{name}</AppText>

            <AppText>@{username}</AppText>
          </View>
        </View>
        <AppText style={{ fontSize: 15 }}>{bio}</AppText>
      </View>
    </View>
  );
}
