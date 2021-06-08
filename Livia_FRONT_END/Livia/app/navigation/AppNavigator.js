import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import LandingScreen from "../screens/app/landing/Landing";
import RoomScreen from "../screens/app/message/Room";
import ProfileScreen from "../screens/app/profile/ProfileScreen";
import SearchScreen from "../screens/app/search/SearchScreeen";

const Stack = createStackNavigator();

const AppNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Landing"
      component={LandingScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="Room"
      component={RoomScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="Profile"
      component={ProfileScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="Search"
      component={SearchScreen}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);

export default AppNavigator;
