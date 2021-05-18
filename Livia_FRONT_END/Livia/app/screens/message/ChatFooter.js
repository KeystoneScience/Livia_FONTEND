import React, { useRef, useState } from "react";
import { View, TextInput } from "react-native";
import colors from "../../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AutoExpandingTextInput from "../../components/AutoExpandingTextInput";

export default function ChatFooter({ onSend }) {
  const [value, setValue] = useState("");
  const [height, setHeight] = React.useState(0);

  function send() {
    if (value) {
      onSend(value);
      setValue("");
    }
  }
  return (
    <View
      style={{
        backgroundColor: colors.fg06,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
      }}
    >
      <TextInput
        onContentSizeChange={(event) => {
          setHeight(event.nativeEvent.contentSize.height * 1.2);
        }}
        style={[
          {
            borderWidth: 1,
            borderColor: "#ccc",
            fontSize: 16,
            padding: 5,
            margin: 10,
            width: "80%",
            color: colors.primaryText,
          },
          { height: Math.min(Math.max(50, height), 400) },
        ]}
        multiline={true}
        value={value}
        onSubmitEditing={() => {}}
        placeholder="Message..."
        returnKeyType="send"
        keyboardType="email-address"
        //ref="newMessage"
        // onFocus={this.inputFocused.bind(this, "newMessage")}
        // onBlur={() => {
        //   this.refs.scrollView.scrollTo(0, 0);
        // }}
        onChangeText={(text) => setValue(text)}
      />
      <MaterialCommunityIcons
        onPress={() => {
          send();
        }}
        name="send-circle"
        size={50}
        color={colors.primary}
      />
    </View>
  );
}
