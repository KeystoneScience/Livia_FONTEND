import React, { useState, useRef, useEffect } from "react";
import {
  LogBox,
  View,
  StatusBar,
  AppState,
  Alert,
  Text,
  StyleSheet,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import OfflineNotice from "./app/components/OfflineNotice";
import cache from "./app/utility/cache";
import AppNavigator from "./app/navigation/AppNavigator";
import * as Updates from "expo-updates";
import navigationTheme from "./app/navigation/navigationTheme";
import Screen from "./app/components/Screen";
import { AppearanceProvider } from "react-native-appearance";
import colors from "./app/config/colors";

export default function App() {
  return (
    <AppearanceProvider>
      <View style={{ flex: 1, backgroundColor: colors.background }}>
        <StatusBar translucent backgroundColor="rgba(0,0,0,0)" />
        <Screen>
          <NavigationContainer theme={navigationTheme}>
            <AppNavigator />
          </NavigationContainer>
        </Screen>
      </View>
    </AppearanceProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
