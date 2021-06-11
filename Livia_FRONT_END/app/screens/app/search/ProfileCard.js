import React from "react";
import { View, Image, TouchableOpacity } from "react-native";
import UserAvatar from "react-native-user-avatar";
import AppText from "../../../components/AppText";
import colors from "../../../config/colors";

const CircleSize = 65;

export default function ({ profilePicture, username, name, onProfilePress }) {
  return (
    <TouchableOpacity
      style={{
        width: "100%",
        display: "flex",
        marginTop: 13,
        height: CircleSize,
        alignItems: "center",
        flexDirection: "row",
      }}
      onPress={() => {
        onProfilePress(username, name, profilePicture);
      }}
    >
      {profilePicture ? (
        <Image
          style={{
            height: CircleSize,
            width: CircleSize,
            borderRadius: CircleSize,
          }}
          source={{ uri: profilePicture }}
        />
      ) : (
        <UserAvatar
          size={CircleSize}
          name={name}
          bgColor={colorArray[name.length % 6]}
        />
      )}
      <View
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          height: "100%",
          paddingLeft: 5,
        }}
      >
        <AppText style={{ fontSize: 15, fontWeight: "600" }}>
          {username}
        </AppText>
        <AppText style={{ fontSize: 15, color: colors.gray }}>{name}</AppText>
      </View>
    </TouchableOpacity>
  );
}
