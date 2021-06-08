import React from "react";
import { View, Image, StyleSheet, TouchableOpacity } from "react-native";
import colors from "../../../config/colors";
import UserAvatar from "react-native-user-avatar";
import AppText from "../../../components/AppText";
import { Ionicons } from "@expo/vector-icons";

const CircleSize = 35;
const CircleSpacing = 28;

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

export default function ({
  groupName,
  groupDescription,
  numUsers,
  profilePics,
  pressButton,
}) {
  return (
    <View style={styles.shadowView}>
      <View style={styles.cardouter}>
        <View>
          <TouchableOpacity
            delayPressIn={0}
            onPress={() => pressButton()}
            style={styles.card}
          >
            <View style={{ flex: 1 }}>
              <View style={styles.back}>
                <View
                  style={{
                    width: "100%",
                    height: "100%",
                    padding: 6,
                    paddingTop: 10,
                    position: "relative",
                    justifyContent: "flex-start",
                    alignItems: "flex-start",
                  }}
                >
                  <AppText numLines={2} style={{ fontSize: 15 }}>
                    {groupName}
                  </AppText>
                  <View style={{ marginTop: 2 }}>
                    <AppText numLines={3} style={{ fontSize: 12 }}>
                      {groupDescription}
                    </AppText>
                  </View>
                  <View
                    style={{ position: "absolute", bottom: 0, marginLeft: 6 }}
                  >
                    <UsersSection
                      profilePics={profilePics}
                      numUsers={numUsers}
                    />
                  </View>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

function UsersSection({ profilePics, numUsers }) {
  function abbreviateNumber(value) {
    const fixedNumber = value > 999 ? 2 : 3;
    var suffixes = ["", "k", "m", "b", "t"];
    var suffixNum = Math.ceil(("" + value).length / 3) - 1;
    var shortValue = parseFloat(
      (suffixNum != 0 ? value / Math.pow(1000, suffixNum) : value).toPrecision(
        fixedNumber
      )
    );
    if (shortValue % 1 != 0) {
      shortValue = shortValue.toFixed(fixedNumber - 1);
    }
    return shortValue + suffixes[suffixNum];
  }

  return (
    <View>
      <View style={{ position: "relative", height: CircleSize }}>
        {profilePics.length > 0 &&
          profilePics.slice(0, 4).map((name, index) => (
            <View
              key={index}
              style={{
                zIndex: 4 - index,
                position: "absolute",
                left: index * CircleSpacing,
              }}
            >
              {name.includes("https://") ? (
                <Image
                  style={{
                    height: CircleSize,
                    width: CircleSize,
                    borderRadius: CircleSize,
                  }}
                  source={{ uri: name }}
                />
              ) : (
                <UserAvatar
                  size={CircleSize}
                  name={name}
                  bgColor={colorArray[name.length % 6]}
                />
              )}
            </View>
          ))}
        {profilePics.length > 5 && (
          <View
            style={{
              zIndex: 0,
              position: "absolute",
              left: 4 * CircleSpacing,
            }}
          >
            <View
              size={30}
              style={[styles.circle, { backgroundColor: colors.primary }]}
            >
              <AppText style={styles.avatarText}>
                +{abbreviateNumber(numUsers - 4)}
              </AppText>
            </View>
          </View>
        )}
        {profilePics.length == 5 && (
          <View
            style={{
              zIndex: 0,
              position: "absolute",
              left: 4 * CircleSpacing,
            }}
          >
            {profilePics[4].includes("https://") ? (
              <Image
                style={{
                  height: CircleSize,
                  width: CircleSize,
                  borderRadius: CircleSize,
                }}
                source={{ uri: profilePics[4] }}
              />
            ) : (
              <UserAvatar
                size={CircleSize}
                name={profilePics[4]}
                bgColor={colorArray[profilePics[4].length % 6]}
              />
            )}
          </View>
        )}
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          margin: 4,
          alignItems: "center",
        }}
      >
        <Ionicons
          name="person"
          size={18}
          style={{ paddingRight: 5 }}
          color={colors.gray}
        />
        <AppText style={{ fontSize: 15, color: colors.gray }}>
          {abbreviateNumber(numUsers)} People
        </AppText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  avatarText: {
    fontSize: 12,
    color: colors.white,
    fontWeight: "bold",
    paddingTop: 9,
    textAlign: "center",
  },
  shadowView: {
    shadowOffset: {
      width: 0,
      height: 2,
    },
    backgroundColor: "#0000",
    elevation: 4,
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  circle: {
    width: CircleSize,
    height: CircleSize,
    borderRadius: CircleSize / 2,
    backgroundColor: "red",
  },
  card: {
    // marginTop: 15,
    width: "100%",
    // maxHeight:400,
    minHeight: 170,
    overflow: "hidden",
    marginBottom: 0,
    alignSelf: "center",
    backgroundColor: colors.fg06,
  },
  cardouter: {
    marginTop: 15,
    width: "96.5%",
    maxHeight: 400,
    minHeight: 170,
    borderRadius: 10,
    overflow: "hidden",
    marginBottom: 0,
    alignSelf: "center",
    backgroundColor: colors.fg06,
    elevation: 4,
  },
  back: {
    height: "100%",
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
  },
  logoContainer: {
    paddingRight: 10,
    display: "flex",
    flex: 0.4,
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
  },
  groupName: {
    fontSize: 23,
    color: colors.AAText,
    fontWeight: "400",
    paddingRight: 15,
    // textAlign: "center",
  },
});
