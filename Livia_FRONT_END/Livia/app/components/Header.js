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
import { Ionicons } from "@expo/vector-icons";
import Constants from "expo-constants";
import colors from "../config/colors";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import cache from "../utility/cache";
import i18n from "i18n-js";
import * as Haptics from "expo-haptics";
function Header({
  backVisible = false,
  plusVisible = false,
  rankVisible = false,
  rankNotificaiton = false,
  groupInfoVisble = false,
  pifView = false,
  onHeartPress,
  onPlusPress,
  onBackPress,
  onRankPress,
  onGroupInfoPress,
  logoVisible,
}) {
  return (
    <View style={{ zIndex: 1 }}>
      <View
        style={{
          backgroundColor: colors.primaryTransparent,
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
              color={colors.white}
            />
          </TouchableOpacity>
        )}
        {plusVisible && (
          <TouchableOpacity
            delayPressIn={0}
            style={{ position: "absolute", right: 15 }}
            onPress={onPlusPress}
          >
            <AntDesign name="plus" size={24} color={colors.white} />
          </TouchableOpacity>
        )}
        {rankVisible && (
          <TouchableOpacity
            delayPressIn={0}
            style={{ position: "absolute", right: 15 }}
            onPress={onRankPress}
          >
            <FontAwesome name="bar-chart" size={24} color={colors.white} />
            {rankNotificaiton && (
              <View
                style={{
                  position: "absolute",
                  borderRadius: 8,
                  backgroundColor: "#D50000",
                  width: 15,
                  height: 15,
                  top: -5,
                  right: -5,
                }}
              />
            )}
          </TouchableOpacity>
        )}

        {groupInfoVisble && (
          <TouchableOpacity
            delayPressIn={0}
            style={{ position: "absolute", right: 60 }}
            onPress={onGroupInfoPress}
          >
            <FontAwesome5 name="user-plus" size={20} color={colors.white} />
          </TouchableOpacity>
        )}
        {pifView && (
          <TouchableOpacity
            delayPressIn={0}
            style={{ position: "absolute", right: 105 }}
            onPress={onHeartPress}
          >
            <AntDesign name="heart" size={20} color={colors.white} />
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
              style={{ resizeMode: "contain", height: "100%" }}
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
    backgroundColor: colors.primaryTransparent,
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
