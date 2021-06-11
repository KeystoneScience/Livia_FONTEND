import React, { useEffect, useState, useRef } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  TouchableWithoutFeedback,
  Alert,
  Platform,
} from "react-native";
import UserAvatar from "react-native-user-avatar";
import { Ionicons } from "@expo/vector-icons";
import Constants from "expo-constants";
import colors from "../config/colors";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import cache from "../utility/cache";
import i18n from "i18n-js";
import * as Haptics from "expo-haptics";

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

function Header({
  backVisible = false,
  userProfileVisible = false,
  pifView = false,
  searchVisible = false,
  onSearchPress,
  onHeartPress,
  onBackPress,
  userProfilePress,
}) {
  const name =
    "https://media-exp1.licdn.com/dms/image/C5603AQGG6ldcC3m5Aw/profile-displayphoto-shrink_800_800/0/1602037994612?e=1627516800&v=beta&t=zIABLUVXv0o9zrUXJEy3aQjvSyrWApKpvuSwRU17u2g";

  return (
    <View style={{ zIndex: 1 }}>
      <View
        style={{
          backgroundColor: colors.fg06,
          height: Constants.statusBarHeight,
        }}
      />
      <View style={styles.bar}>
        {backVisible && (
          <TouchableOpacity
            delayPressIn={0}
            style={{ position: "absolute", left: 5 }}
            onPress={onBackPress}
          >
            <Ionicons
              name="chevron-back-outline"
              size={29}
              color={colors.primary}
            />
          </TouchableOpacity>
        )}

        {searchVisible && (
          <TouchableOpacity
            delayPressIn={0}
            style={{ position: "absolute", left: 10 }}
            onPress={onSearchPress}
          >
            <Ionicons name="search" size={29} color={colors.primary} />
          </TouchableOpacity>
        )}

        {userProfileVisible && (
          <TouchableOpacity
            delayPressIn={0}
            style={{ position: "absolute", right: 10 }}
            onPress={userProfilePress}
          >
            {name.includes("https://") ? (
              <Image
                style={{
                  height: 40,
                  width: 40,
                  borderRadius: 20,
                }}
                source={{ uri: name }}
              />
            ) : (
              <UserAvatar
                size={40}
                name={name}
                bgColor={colorArray[name.length % 6]}
              />
            )}
          </TouchableOpacity>
        )}
        {pifView && (
          <TouchableOpacity
            delayPressIn={0}
            style={{ position: "absolute", right: 105 }}
            onPress={onHeartPress}
          >
            <AntDesign name="heart" size={20} color={colors.primary} />
          </TouchableOpacity>
        )}
        <View pointerEvents="box-none" style={{ height: "100%", padding: 11 }}>
          <TouchableWithoutFeedback
            onLongPress={() => {
              if (Platform.OS === "ios") Haptics.notificationAsync();
              Alert.alert(
                i18n.t("Clear all app data"),
                i18n.t(
                  "this action will delete all groups and all user data This is PERMANENT"
                ),
                [
                  {
                    text: "Cancel",
                    onPress: () => {},
                  },
                  {
                    text: "OK",
                    onPress: () => {
                      cache.clearAsyncStorage();
                    },
                  },
                ],
                { cancelable: false }
              );
            }}
          >
            <Image
              style={{ resizeMode: "contain", height: "100%", tintColor: colors.primary }}
              source={require("../assets/logos/Untitled-1.png")}
            ></Image>
          </TouchableWithoutFeedback>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  bar: {
    alignItems: "center",
    backgroundColor: colors.fg06,
    height: 64,
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
    zIndex: 1,
  },
  text: {
    color: colors.primaryText,
  },
});

export default Header;
