import React, { useRef } from "react";
import { View, Dimensions, TextInput, ScrollView } from "react-native";
import Header from "../../../components/Header";
import { Modalize } from "react-native-modalize";
import colors from "../../../config/colors";
import { AntDesign } from "@expo/vector-icons";
import SegmentedControl from "@react-native-community/segmented-control";
import ProfileCard from "./ProfileCard";

export default function ({ navigation, route }) {
  const [searchText, setSearchText] = React.useState("");
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  return (
    <View style={{ flex: 1 }}>
      <Header
        backVisible={true}
        onBackPress={() => {
          navigation.navigate("Landing");
        }}
      />
      <View style={{ backgroundColor: colors.background }}>
        <View style={{ display: "flex", alignItems: "center" }}>
          <View
            style={{
              backgroundColor: colors.lightGray,
              height: 40,
              width: "90%",
              borderRadius: 5,
              marginTop: 5,
              padding: 5,
              justifyContent: "flex-start",
              alignItems: "center",
              display: "flex",
              flexDirection: "row",
            }}
          >
            <AntDesign
              name="search1"
              size={24}
              color={colors.gray}
              style={{ marginRight: 5 }}
            />
            <TextInput
              style={{ flex: 1, color: colors.primaryText }}
              onChangeText={(text) => setSearchText(text)}
              value={searchText}
              placeholder="Search"
              returnKeyType="search"
              onSubmitEditing={() => {}}
            />
          </View>
        </View>
        <View style={{ padding: 10, zIndex: 5 }}>
          <SegmentedControl
            values={["Rooms", "Users"]}
            selectedIndex={selectedIndex}
            onChange={(event) => {
              setSelectedIndex(event.nativeEvent.selectedSegmentIndex);
            }}
            activeFontStyle={{ color: colors.white }}
            fontStyle={{ color: colors.primaryText }}
            tintColor={colors.primary}
            backgroundColor={colors.fg06}
          />
          {selectedIndex == 0 && (
            <ScrollView style={{ height: "100%" }}>
              <ProfileCard
                profilePicture={
                  "https://media-exp1.licdn.com/dms/image/C5603AQGG6ldcC3m5Aw/profile-displayphoto-shrink_800_800/0/1602037994612?e=1627516800&v=beta&t=zIABLUVXv0o9zrUXJEy3aQjvSyrWApKpvuSwRU17u2g"
                }
                name={"Nate Stone"}
                username={"nate"}
              />
              <View style={{ padding: 30 }}></View>
            </ScrollView>
          )}
          {selectedIndex == 1 && (
            <ScrollView style={{ height: "100%" }}>
              <View style={{ padding: 30 }}></View>
            </ScrollView>
          )}
        </View>
      </View>
    </View>
  );
}
