import React from "react";
import { TextInput, View } from "react-native";
import colors from "../config/colors";
import AppText from "./AppText";

export default function ({ onTextChange, charLimit, placeHolder }) {
  const [text, setText] = React.useState("");
  return (
    <View style={{ display: "flex", flexDirection: "row", paddingBottom: 10 }}>
      <View style={{ width: 100, marginLeft: 20 }}>
        <AppText style={{ fontSize: 14 }}>{placeHolder}</AppText>
      </View>
      <View
        style={{
          borderBottomWidth: 1,
          borderBottomColor: colors.grey,
          marginRight: 100,
          width: 250,
        }}
      >
        <TextInput
          multiline={false}
          onChangeText={(text) => {
            if (text.length > 60) {
              return;
            }
            setText(text);
          }}
          placeholder={placeHolder}
          value={text}
        />
      </View>
    </View>
  
  );
}
