import React, { useRef } from "react";
import { View, Image } from "react-native";
import colors from "../../../config/colors";
import AppText from "../../../components/AppText";
import UserAvatar from "react-native-user-avatar";

var colorArray = [
  colors.primary,
  colors.secondary,
  "#2FE079",
  "#73B758",
  "#7C57E0",
  "#5A89F8",
  "#D88645",
  "#F5D647",
];

export default function Message({ picture, username, message }) {
  return (
    <View
      style={{
        backgroundColor: colors.background,
        display: "flex",
        flexDirection: "row",
        borderBottomColor: colors.gray,
        borderBottomWidth: 0,
        width: "100%",
      }}
    >
      <View style={{ margin: 8 }}>
        <UserAvatar
          size={40}
          name={username}
          bgColor={colorArray[username.length % 8]}
        />
      </View>

      <View
        style={{
          display: "flex",
          flex: 6,
          flexDirection: "column",
          margin: 5,
        }}
      >
        <AppText style={{ fontSize: 17, fontWeight: "600" }}>
          {username}
        </AppText>
        <AppText
          style={{
            fontSize: 15,
            color: message[0] === ">" ? "#789922" : colors.primaryText,
          }}
        >
          {message}
        </AppText>
      </View>
    </View>
  );
}
