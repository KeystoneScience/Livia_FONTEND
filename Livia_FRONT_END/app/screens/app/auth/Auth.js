import React, { useRef, useState } from "react";
import {
  View,
  Dimensions,
  TouchableOpacity,
  Text,
  Image,
  StyleSheet,
} from "react-native";
import { Modalize } from "react-native-modalize";
import FormInput from "../../../components/FormInput";
import colors from "../../../config/colors";
import validate from "validate.js";

export default function () {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [emailError, setEmailError] = useState();
  const [passwordError, setPasswordError] = useState();

  const modalizeRef = useRef();

  const handleSignIn = () => {
    // email.length === 0 ? setEmailError(true) : setEmailError(false);
    // password.length === 0 ? setPasswordError(true) : setPasswordError(false);
    //console.log(validate({ email: email, password: password }, constraints));
    //console.log(validate({ password: password }, constraints));
    //setEmailError(validate({ emailConstraints: email }, constraints));
    //setPasswordError(validate({ passwordConstraints: password }, constraints));
    console.log(validateWrapper("email", email));
    console.log(validateWrapper("password", password));

    setEmailError(validateWrapper("email", email));
    setPasswordError(validateWrapper("password", password));
  };

  // const validateEmail = (email) => {
  //   const regex =
  //     /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  //   return regex.test(email);
  // };

  const constraints = {
    email: {
      presence: {
        message: "^Email is a required field",
      },
      email: {
        message: "^Invalid email address",
      },
    },
    password: {
      presence: {
        message: "^Password is a required field",
      },
      length: {
        minimum: 5,
        message: "^Password must be at least 5 characters",
      },
    },
  };

  const validateWrapper = (field, value) => {
    let formValues = {};
    formValues[field] = value;

    let formFields = {};
    formFields[field] = constraints[field];

    const result = validate(formValues, formFields);

    if (result) {
      return result[field][0];
    }
    return null;
  };

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
        modalStyle={{
          flex: 1,
          backgroundColor: colors.fg06,
        }}
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
              error={emailError}
            />
            <FormInput
              labelValue={password}
              onChangeText={(userPassword) => setPassword(userPassword)}
              placeholderText="Password"
              iconType="key-outline"
              secureTextEntry={true}
              error={passwordError}
            />
            <TouchableOpacity
              onPress={handleSignIn}
              style={styles.signInButton}
            >
              <Text style={{ color: colors.white, fontSize: 18 }}>Sign In</Text>
            </TouchableOpacity>
            <Text style={{ color: colors.white }}>
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
    width: Dimensions.get("screen").width * 0.9,
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
