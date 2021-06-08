import React from "react";
import colors from "../../../config/colors";
import {
  ImageBackground,
  View,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";
import i18n from "i18n-js";

export default function () {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.primary,
        position: "relative",
      }}
    >
      <View style={{ position: "absolute", top: 100 }}>
        <Image
          style={{ resizeMode: "contain", width: 100, height: 100 }}
          source={require("../../../assets/logos/Untitled-1.png")}
        />
      </View>
      <View
        style={{
          position: "absolute",
          bottom: 0,
          width: "100%",
          height: "15%",
        }}
      >
        <TouchableOpacity
          style={{
            backgroundColor: colors.greenHeart,
            width: "100%",
            flex: 1,
            justifyContent: "center",
            alignContent: "center",
          }}
          onPress={() => {
            if (Platform.OS === "ios") Haptics.selectionAsync();
            setJoinVisible(true);
          }}
        >
          <Text
            style={{
              textAlign: "center",
              color: "#FFF",
              fontWeight: "600",
              fontSize: 20,
            }}
          >
            {i18n.t("Login")}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            if (Platform.OS === "ios") Haptics.selectionAsync();
            navigation.navigate("Create", {
              screenName: screenName,
              pushToken: pushToken,
            });
          }}
          style={{
            backgroundColor: colors.secondary,
            width: "100%",
            flex: 1,
            justifyContent: "center",
            alignContent: "center",
          }}
        >
          <Text
            style={{
              textAlign: "center",
              color: "#FFF",
              fontWeight: "600",
              fontSize: 20,
            }}
          >
            {i18n.t("CreateAnAccount")}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
