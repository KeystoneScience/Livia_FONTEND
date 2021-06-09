import React, { useRef, useState } from "react";
import {
  View,
  Dimensions,
  TouchableOpacity,
  Text,
  Image,
  StyleSheet,
  TextInput,
  Button,
} from "react-native";
import { Modalize } from "react-native-modalize";
import { Colors } from "react-native/Libraries/NewAppScreen";
import AppButton from "../../../components/AppButton";
import FormInput from "../../../components/FormInput";
import colors from "../../../config/colors";

export default function () {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const modalizeRef = useRef();

  return (
    <>
      <TouchableOpacity
        style={{
          height: 25,
          width: 100,
          borderRadius: 3,
          backgroundColor: colors.primary,
          justifyContent: "center",
          alignItems: "center",
        }}
        onPress={() => modalizeRef.current.open()}
      >
        <Text style={{ color: colors.white }}>AUTH TEST</Text>
      </TouchableOpacity>
      <Modalize
        modalHeight={Math.floor(Dimensions.get("screen").height)}
        ref={modalizeRef}
        handlePosition="inside"
        modalStyle={{ flex: 1 }}
      >
        <View style={styles.container}>
          <View style={styles.logoSection}>
            <Image
              source={require("../../../assets/logos/Untitled-1.png")}
              style={{ tintColor: colors.primary }}
            ></Image>
            <Text style={{ color: colors.primary, fontSize: 28 }}>
              Please sign in to continue
            </Text>
          </View>
          <View style={styles.form}>
            <FormInput
              labelValue={email}
              onChangeText={(userEmail) => setEmail(userEmail)}
              placeholderText="Email"
              iconType="mail-outline"
              keyboardType="email-address"
              autoCapitalize="none"
              autoCorrect={false}
            />
            <FormInput
              labelValue={password}
              onChangeText={(userPassword) => setPassword(userPassword)}
              placeholderText="Password"
              iconType="key-outline"
              secureTextEntry={true}
            />
            <TouchableOpacity onPress={() => {}} style={styles.signInButton}>
              <Text style={{ color: colors.white, fontSize: 18 }}>Sign In</Text>
            </TouchableOpacity>
            <Text>
              Don't have an account?{" "}
              <Text onPress={() => {}} style={styles.signUpLink}>
                Sign Up
              </Text>
            </Text>
          </View>
        </View>
      </Modalize>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  logoSection: {
    alignItems: "center",
  },
  form: {
    alignItems: "center",
  },
  signInButton: {
    width: Dimensions.get("screen").width * 0.5,
    height: Dimensions.get("screen").height / 15,
    backgroundColor: colors.primary,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  signUpLink: {
    color: colors.primary,
    textDecorationLine: "underline",
  },
});
