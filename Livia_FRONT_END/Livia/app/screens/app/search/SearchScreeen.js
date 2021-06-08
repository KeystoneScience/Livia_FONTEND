import React, { useRef } from "react";
import { View, Dimensions, TextInput } from "react-native";
import Header from "../../../components/Header";
import { Modalize } from "react-native-modalize";
import colors from "../../../config/colors";
import { AntDesign } from "@expo/vector-icons";

export default function ({ navigation, route }) {
  const [searchText, setSearchText] = React.useState("");

  
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
              onSubmitEditing={() => {

              }}
            />
          </View>
        </View>
      </View>
              
    </View>
  );
}
