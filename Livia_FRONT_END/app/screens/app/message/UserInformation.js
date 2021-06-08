import React from "react";
import { View, Image, TouchableOpacity } from "react-native";
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

export default function ({ username, name, bio, picture }) {
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
          <View style={{ margin: 10 }}>
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
          </View>

          <View
            style={{
              display: "flex",
              flexDirection: "column",
              maxHeight: 75,
              height: 75,
              position: "relative",
            }}
          >
            <AppText>{username}</AppText>
            <AppText style={{ fontSize: 12 }}>{name}</AppText>
            <TouchableOpacity
              style={{
                height: 25,
                width: 100,
                borderRadius: 3,
                backgroundColor: isFollowing ? "#A0A0A0" : "#0055D5",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                position: "absolute",
                bottom: 0,
              }}
            >
              <AppText style={{ color: colors.white, fontWeight: "600" }}>
                {isFollowing ? "FOLLOWING" : "FOLLOW"}
              </AppText>
            </TouchableOpacity>
          </View>
        </View>
        <AppText style={{ fontSize: 15 }}>{bio}</AppText>
      </View>
    </View>
  );
}
