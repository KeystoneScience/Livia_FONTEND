import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import SwipeScreen from "../screens/SwipeScreen";
import LandingScreen from "../screens/landing/LandingScreen";
import JoinScreen from "../screens/join/JoinGroupScreen";
import CreateGroupScreen from "../screens/create/CreateGroupScreen";
import ShareScreen from "../screens/ShareScreen";
import GroupStats from "../screens/stats/GroupStats";
import Tutorial from "../screens/Tutorial";

const Stack = createStackNavigator();

const AppNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Landing"
      component={LandingScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="Swipe"
      component={SwipeScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="Create"
      component={CreateGroupScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="Stats"
      component={GroupStats}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="Tutorial"
      component={Tutorial}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);

export default AppNavigator;
