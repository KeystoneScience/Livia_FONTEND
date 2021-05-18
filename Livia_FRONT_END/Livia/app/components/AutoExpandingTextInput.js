import React from "react";
import { TextInput } from "react-native";

export default function AutoExpandingTextInput(props) {
  const [text, setText] = React.useState("");
  const [height, setHeight] = React.useState(0);

  return (
    <TextInput
      {...props}
      multiline={true}
      onChangeText={(text) => {
        setText(text);
      }}
      onContentSizeChange={(event) => {
        setHeight(event.nativeEvent.contentSize.height);
      }}
      style={[props.style, { height: Math.min(Math.max(50, height), 400) }]}
      value={text}
    />
  );
}
