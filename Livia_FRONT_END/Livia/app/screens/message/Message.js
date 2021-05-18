import React, { useRef } from "react";
import { View, Image } from "react-native";
import colors from "../../config/colors";
import AppText from "../../components/AppText";

export default function Message({ picture, username, message }) {
  return (
    <View
      style={{
        backgroundColor: colors.fg06,
        display: "flex",
        flexDirection: "row",
        borderBottomColor: colors.gray,
        borderBottomWidth: 1,
        width: "100%",
      }}
    >
      <View style={{ flex: 1 }}>
        <Image
          style={{
            height: 50,
            width: 50,
            resizeMode: "cover",
            borderRadius: 25,
            margin: 5,
          }}
          source={{
            uri: picture,
          }}
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
        <AppText style={{ fontSize: 15 }}>{message}</AppText>
      </View>
    </View>
  );
}
