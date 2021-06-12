import React from "react";
import { View, TextInput, StyleSheet, Dimensions, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import colors from "../config/colors";

const FormInput = ({
  labelValue,
  placeholderText,
  iconType,
  error,
  ...rest
}) => {
  return (
    <>
      <View
        style={
          error
            ? [styles.inputContainer, { borderColor: colors.secondary }]
            : styles.inputContainer
        }
      >
        <View style={styles.iconStyle}>
          <Ionicons name={iconType} size={25} color="#666" />
        </View>
        <TextInput
          value={labelValue}
          style={styles.input}
          numberOfLines={1}
          placeholder={placeholderText}
          placeholderTextColor={error ? colors.secondary : "#666"}
          {...rest}
        />
      </View>
      {error ? <Text style={styles.errorInput}>{error}</Text> : null}
    </>
  );
};

export default FormInput;

const styles = StyleSheet.create({
  inputContainer: {
    marginBottom: 10,
    width: "100%",
    height: Dimensions.get("window").height / 15,
    borderColor: "transparent",
    borderRadius: 5,
    borderWidth: 2,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  iconStyle: {
    padding: 10,
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    borderRightColor: "#ccc",
    borderRightWidth: 1,
    width: 50,
  },
  input: {
    padding: 10,
    flex: 1,
    fontSize: 16,
    color: "#333",
    justifyContent: "center",
    alignItems: "center",
  },
  errorInput: {
    color: colors.secondary,
    textAlign: "left",
    width: "100%",
    marginBottom: 10,
  },
});
